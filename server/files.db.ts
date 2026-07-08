/**
 * Database helpers for file management operations
 * All queries return raw Drizzle rows for use in tRPC procedures
 */

import { and, eq, desc, like } from "drizzle-orm";
import { getDb } from "./db";
import { files, fileFolders, File, FileFolder, InsertFile, InsertFileFolder } from "../drizzle/schema";

/**
 * Get all files for a user with optional filtering
 */
export async function getUserFiles(userId: number, options?: { search?: string; category?: string }) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const conditions = [eq(files.userId, userId)];

  if (options?.search) {
    conditions.push(like(files.filename, `%${options.search}%`));
  }

  if (options?.category) {
    conditions.push(eq(files.category, options.category as any));
  }

  return db
    .select()
    .from(files)
    .where(and(...conditions))
    .orderBy(desc(files.createdAt));
}

/**
 * Get a single file by ID
 */
export async function getFileById(fileId: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db
    .select()
    .from(files)
    .where(and(eq(files.id, fileId), eq(files.userId, userId)))
    .limit(1);

  return result[0];
}

/**
 * Create a new file record
 */
export async function createFile(data: InsertFile) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.insert(files).values(data);

  // Return the created file
  const result = await db
    .select()
    .from(files)
    .where(and(eq(files.userId, data.userId!), eq(files.storageKey, data.storageKey)))
    .orderBy(desc(files.createdAt))
    .limit(1);

  return result[0];
}

/**
 * Update file metadata
 */
export async function updateFile(fileId: number, userId: number, data: Partial<InsertFile>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db
    .update(files)
    .set({ ...data, updatedAt: new Date() })
    .where(and(eq(files.id, fileId), eq(files.userId, userId)));

  return getFileById(fileId, userId);
}

/**
 * Delete a file record
 */
export async function deleteFile(fileId: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.delete(files).where(and(eq(files.id, fileId), eq(files.userId, userId)));
}

/**
 * Get all folders for a user
 */
export async function getUserFolders(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return db
    .select()
    .from(fileFolders)
    .where(eq(fileFolders.userId, userId))
    .orderBy(desc(fileFolders.createdAt));
}

/**
 * Get a single folder by ID
 */
export async function getFolderById(folderId: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db
    .select()
    .from(fileFolders)
    .where(and(eq(fileFolders.id, folderId), eq(fileFolders.userId, userId)))
    .limit(1);

  return result[0];
}

/**
 * Create a new folder
 */
export async function createFolder(data: InsertFileFolder) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.insert(fileFolders).values(data);

  // Return the created folder
  const result = await db
    .select()
    .from(fileFolders)
    .where(and(eq(fileFolders.userId, data.userId!), eq(fileFolders.name, data.name)))
    .orderBy(desc(fileFolders.createdAt))
    .limit(1);

  return result[0];
}

/**
 * Update folder metadata
 */
export async function updateFolder(folderId: number, userId: number, data: Partial<InsertFileFolder>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db
    .update(fileFolders)
    .set({ ...data, updatedAt: new Date() })
    .where(and(eq(fileFolders.id, folderId), eq(fileFolders.userId, userId)));

  return getFolderById(folderId, userId);
}

/**
 * Delete a folder
 */
export async function deleteFolder(folderId: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.delete(fileFolders).where(and(eq(fileFolders.id, folderId), eq(fileFolders.userId, userId)));
}
