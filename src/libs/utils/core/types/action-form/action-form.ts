export type ActionFormProps = {
    className?: string
    handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void | Promise<void>
    children?: React.ReactNode
}
