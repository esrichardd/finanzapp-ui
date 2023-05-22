'use client'
import { ActionFormProps } from '@/shared/utils/core/types'

export function ActionForm({ handleSubmit, children }: ActionFormProps) {
    return (
        <form onSubmit={(e) => handleSubmit && handleSubmit(e)} autoComplete="off">
            {children}
        </form>
    )
}
