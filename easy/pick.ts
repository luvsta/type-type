interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const pick: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}