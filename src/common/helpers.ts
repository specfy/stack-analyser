export function cleanPath(paths: string[], root: string): string[] {
  return paths.map((path) => path.replace(root, ''));
}
