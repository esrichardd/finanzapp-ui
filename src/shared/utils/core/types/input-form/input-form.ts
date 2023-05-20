export type InputFormProps = {
    type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
    name?: string
    label?: string
    placeholder?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: string
    disabled?: boolean
    required?: boolean
    className?: string
}
