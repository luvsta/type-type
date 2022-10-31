type ExampleType = Promise<{ key: 1, name: 2 }>

type Result = MyAwaited<ExampleType> // string

type MyAwaited<T> = T extends Promise<infer U> ? U extends Promise<any> ? MyAwaited<U> : U : never 
