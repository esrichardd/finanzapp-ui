'use client'
import { ActionFormProps } from '@/libs/utils/core/types'

export function ActionForm({ handleSubmit, children }: ActionFormProps) {
    return (
        <form onSubmit={(e) => handleSubmit?.(e)} autoComplete="off">
            {children}
        </form>
    )
}
