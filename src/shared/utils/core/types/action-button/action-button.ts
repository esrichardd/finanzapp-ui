export type ActionButtonProps = {
    className?: string
    onClick?: () => void
    children?: React.ReactNode
    text: string
    type: 'button' | 'submit' | 'reset'
    color: 'primary' | 'danger'
}
