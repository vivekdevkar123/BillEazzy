/**
 * Helper function to get the correct image path with basePath
 * This ensures images work correctly on GitHub Pages
 * The basePath matches the repository name
 */
const BASE_PATH = '/BillEazzy';

export const getImagePath = (path: string): string => {
  // If path already includes basePath, return as is
  if (path.startsWith(BASE_PATH)) {
    return path;
  }
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Return path with basePath prefix
  return `${BASE_PATH}/${cleanPath}`;
};
