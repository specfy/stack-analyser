import type { AnalyserJson } from '../types/index.js';

export function cleanNestedSnapshot(pl: AnalyserJson) {
  pl.id = '';
  pl.inComponent = '';

  pl.childs.forEach((child) => cleanNestedSnapshot(child));
  pl.edges.forEach((edge) => (edge.target = ''));

  return pl;
}

export function cleanPath(paths: string[], root: string) {
  return paths.map((path) => path.replace(root, ''));
}
