export type MaybePromise<T> = Awaited<T> | Promise<Awaited<T>>;
