export type ValueOf<T> = T[keyof T];
export type PickValue<T, TKey extends keyof T> = ValueOf<Pick<T, TKey>>;
