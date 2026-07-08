/**
 * tRPC router for file management operations
 * Handles file uploads, downloads, and metadata management
 */

import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { storagePut } from "../storage";
import {
  getUserFiles,
  getFileById,
  createFile,
  updateFile,
  deleteFile,
  getUserFolders,
  getFolderById,
  createFolder,
  updateFolder,
  deleteFolder,
} from "../files.db";
import { TRPCError } from "@trpc/server";

export const filesRouter = router({
  /**
   * List all files for the authenticated user
   */
  list: protectedProcedure
    .input(
      z.object({
        search: z.string().optional(),
        category: z.enum(["image", "document", "video", "audio", "other"]).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        return await getUserFiles(ctx.user.id, input);
      } catch (error) {
        console.error("[Files] Failed to list files:", error);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to list files" });
      }
    }),

  /**
   * Get a single file by ID
   */
  get: protectedProcedure
    .input(z.object({ fileId: z.number() }))
    .query(async ({ ctx, input }) => {
      try {
        const file = await getFileById(input.fileId, ctx.user.id);
        if (!file) {
          throw new TRPCError({ code: "NOT_FOUND", message: "File not found" });
        }
        return file;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("[Files] Failed to get file:", error);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to get file" });
      }
    }),

  /**
   * Upload a file
   * Client sends file as base64 or buffer
   */
  upload: protectedProcedure
    .input(
      z.object({
        filename: z.string().min(1),
        fileData: z.string(), // base64 encoded file data
        mimeType: z.string(),
        size: z.number(),
        category: z.enum(["image", "document", "video", "audio", "other"]).default("other"),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        // Decode base64 to buffer
        const buffer = Buffer.from(input.fileData, "base64");

        // Validate file size (max 50MB)
        const MAX_SIZE = 50 * 1024 * 1024;
        if (buffer.length > MAX_SIZE) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "File size exceeds 50MB limit" });
        }

        // Upload to S3
        const storageKey = `files/${ctx.user.id}/${Date.now()}-${input.filename}`;
        const { url } = await storagePut(storageKey, buffer, input.mimeType);

        // Create file record in database
        const file = await createFile({
          userId: ctx.user.id,
          filename: input.filename,
          storageKey,
          url,
          mimeType: input.mimeType,
          size: input.size,
          category: input.category,
          description: input.description,
        });

        return file;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("[Files] Failed to upload file:", error);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to upload file" });
      }
    }),

  /**
   * Update file metadata
   */
  update: protectedProcedure
    .input(
      z.object({
        fileId: z.number(),
        description: z.string().optional(),
        category: z.enum(["image", "document", "video", "audio", "other"]).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const file = await getFileById(input.fileId, ctx.user.id);
        if (!file) {
          throw new TRPCError({ code: "NOT_FOUND", message: "File not found" });
        }

        return await updateFile(input.fileId, ctx.user.id, {
          description: input.description,
          category: input.category,
        });
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("[Files] Failed to update file:", error);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to update file" });
      }
    }),

  /**
   * Delete a file
   */
  delete: protectedProcedure
    .input(z.object({ fileId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const file = await getFileById(input.fileId, ctx.user.id);
        if (!file) {
          throw new TRPCError({ code: "NOT_FOUND", message: "File not found" });
        }

        await deleteFile(input.fileId, ctx.user.id);
        return { success: true };
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("[Files] Failed to delete file:", error);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to delete file" });
      }
    }),

  /**
   * List all folders for the user
   */
  folders: router({
    list: protectedProcedure.query(async ({ ctx }) => {
      try {
        return await getUserFolders(ctx.user.id);
      } catch (error) {
        console.error("[Files] Failed to list folders:", error);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to list folders" });
      }
    }),

    /**
     * Create a new folder
     */
    create: protectedProcedure
      .input(
        z.object({
          name: z.string().min(1),
          description: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        try {
          return await createFolder({
            userId: ctx.user.id,
            name: input.name,
            description: input.description,
          });
        } catch (error) {
          console.error("[Files] Failed to create folder:", error);
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to create folder" });
        }
      }),

    /**
     * Update a folder
     */
    update: protectedProcedure
      .input(
        z.object({
          folderId: z.number(),
          name: z.string().optional(),
          description: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        try {
          const folder = await getFolderById(input.folderId, ctx.user.id);
          if (!folder) {
            throw new TRPCError({ code: "NOT_FOUND", message: "Folder not found" });
          }

          return await updateFolder(input.folderId, ctx.user.id, {
            name: input.name,
            description: input.description,
          });
        } catch (error) {
          if (error instanceof TRPCError) throw error;
          console.error("[Files] Failed to update folder:", error);
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to update folder" });
        }
      }),

    /**
     * Delete a folder
     */
    delete: protectedProcedure
      .input(z.object({ folderId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        try {
          const folder = await getFolderById(input.folderId, ctx.user.id);
          if (!folder) {
            throw new TRPCError({ code: "NOT_FOUND", message: "Folder not found" });
          }

          await deleteFolder(input.folderId, ctx.user.id);
          return { success: true };
        } catch (error) {
          if (error instanceof TRPCError) throw error;
          console.error("[Files] Failed to delete folder:", error);
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to delete folder" });
        }
      }),
  }),
});
