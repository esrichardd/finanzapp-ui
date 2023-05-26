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
    return <button onClick={() => handleClick?.()}>{loading ? <LoadingSpinner /> : text}</button>
}
