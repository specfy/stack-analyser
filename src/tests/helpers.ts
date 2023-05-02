import type { TechAnalyser } from '../types';

export function cleanSnapshot(ta: TechAnalyser) {
  ta.id = '';
  ta.edges.forEach((edge) => (edge.to = ''));
  if (ta.inComponent) {
    ta.inComponent = '';
  }
  ta.childs.forEach((child) => cleanSnapshot(child));
  return ta;
}
