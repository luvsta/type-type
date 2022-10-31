import { Equal } from "@type-challenges/utils"

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'> // expected to be `false`


type Includes<T extends readonly any[], U> =
    T extends [infer first, ...infer Rest]
    ? Equal<first, U> extends true ? true : Includes<Rest, U>
    : false