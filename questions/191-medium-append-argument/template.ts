type AppendArgument<Fn extends (...args:any) => any, A> = (...args:[...Parameters<Fn>, A]) => MyReturnType<Fn>
