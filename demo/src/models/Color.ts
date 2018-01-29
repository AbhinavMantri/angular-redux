export interface Color {
    id: number,
    color: string,
    category: string,
    type: string,
    code: Code
}

export interface Code {
    rgba: Array<number>,
    hex: string
}