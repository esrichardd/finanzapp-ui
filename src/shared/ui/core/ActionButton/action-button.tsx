'use client'
import { ActionButtonProps } from '@/shared/utils/core/types'
import { LoadingSpinner } from './LoadingSpinner'
import './action-button.scss'

export function ActionButton({
    text,
    color,
    type,
    handleClick,
    loading = false,
    disabled = false,
    className = '',
}: ActionButtonProps) {
    return (
        <button
            onClick={() => handleClick && handleClick()}
            className={`ActionButton-button ActionButton-button-${color} ${
                loading ? 'ActionButton-button-loading' : ''
            } ${className}`}
            type={type}
            disabled={disabled}
        >
            {loading ? <LoadingSpinner /> : text}
        </button>
    )
}
