import type { AnalyserJson } from '../types/index.js';

export function cleanNestedSnapshot(pl: AnalyserJson): AnalyserJson {
  pl.id = '';
  pl.inComponent = '';

  for (const child of pl.childs) cleanNestedSnapshot(child);
  for (const edge of pl.edges) edge.target = '';

  return pl;
}

export function cleanPath(paths: string[], root: string): string[] {
  return paths.map((path) => path.replace(root, ''));
}
