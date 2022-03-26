type DeepReadonly<T> = {
    readonly[K in keyof T]: T[K] extends boolean|string|(()=>void) ? T[K] : DeepReadonly<T[K]>
}
