import { useEffect } from "react";

/**
 * Sets document title and meta description for a page.
 * Lightweight alternative to react-helmet (no extra dependency).
 * Restores the previous values on unmount so navigating back to "/"
 * shows the correct home meta tags again.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title;
    let descTag = document.querySelector('meta[name="description"]');
    const prevDescription = descTag?.getAttribute("content") ?? "";

    document.title = title;

    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", description);

    return () => {
      document.title = prevTitle;
      descTag?.setAttribute("content", prevDescription);
    };
  }, [title, description]);
}
