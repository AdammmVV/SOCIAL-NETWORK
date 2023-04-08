export const required = (value: string) => {
    if(value) return undefined

    return 'should be filled'
}

export const maxLength = (maxNumber: number) => (value: string) => {
    if(value && value.length > maxNumber) return `Must be ${maxNumber} characters or less`

    return undefined
}