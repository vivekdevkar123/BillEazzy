/**
 * Helper function to get the correct image path
 * For custom domain, images are served from root path
 */
export const getImagePath = (path: string): string => {
  // Return path as-is for custom domain (no basePath needed)
  return path;
};
