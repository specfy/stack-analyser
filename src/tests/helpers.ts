import type { AnalyserJson } from '../types/index.js';

export function cleanNestedSnapshot(pl: AnalyserJson): AnalyserJson {
  pl.id = '';
  pl.inComponent = '';

  for (const child of pl.childs) cleanNestedSnapshot(child);
  for (const edge of pl.edges) edge.target = '';

  return pl;
}
