export type ActionButtonProps = {
    className?: string
    handleClick?: () => void
    children?: React.ReactNode
    loading?: boolean
    disabled?: boolean
    text: string
    type: 'button' | 'submit' | 'reset'
    color: 'primary' | 'danger'
}
