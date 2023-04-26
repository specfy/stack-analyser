export type Modify<T, TR> = Omit<T, keyof TR> & TR;
