// type AwaitedArray<T extends any[]> = T extends [infer V1, ...infer Rest] ? [Awaited<V1>, ...AwaitedArray<Rest>] : []
// declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<AwaitedArray<T>>
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{ [P in keyof T]: Awaited<T[P]> }>