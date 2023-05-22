import { ActionButtonProps } from '@/shared/utils/core/types'
import './action-button.scss'

export function ActionButton({ text, color, type, className = '' }: ActionButtonProps) {
    return (
        <button className={`ActionButton-button ActionButton-button-${color} ${className}`} type={type}>
            {text}
        </button>
    )
}
