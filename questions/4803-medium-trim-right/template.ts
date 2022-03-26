type TrimRight<S extends string> = S extends `${infer T}${' '|'\n'|'\t'}` ? TrimRight<T> : S
