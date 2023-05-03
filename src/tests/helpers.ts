import type { TechAnalyser } from '../types';

export function cleanSnapshot(ta: TechAnalyser, childs?: TechAnalyser[]) {
  if (!childs) {
    childs = ta.childs;
  }

  ta.edges.forEach((edge) => {
    // const find = childs!.find((child) => child.id === edge.to);
    // edge.to = `${find!.name}`;
    edge.to = ``;
  });

  if (ta.inComponent) {
    // const find = childs!.find((child) => child.id === ta.inComponent);
    // console.log('on check', ta.inComponent, 'in', childs);
    // ta.inComponent = `${find!.name}`;
    ta.inComponent = ``;
  }

  ta.childs.forEach((child) => cleanSnapshot(child, childs));

  ta.id = '';
  return ta;
}
