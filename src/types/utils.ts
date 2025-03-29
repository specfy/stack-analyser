export type Modify<T, TR> = Omit<T, keyof TR> & TR;

export type MaybePromise<T> = Promise<T> | T;
