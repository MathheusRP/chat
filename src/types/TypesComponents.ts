
export interface IInput {
    label: string
    id: string
    type: string
    register: Function
    error?: string | undefined
}

export interface IButon {
    name?: string
    id?: string
    hover?: number
    border?: string
    color?: string
    width?: string
    height?: string
    fontSize?: string
    fontWeight?: string
    backgroundColor?: string
    type?: string
    onClick?: any
}