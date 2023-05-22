'use client'
import { ActionButton, ActionForm, InputForm } from '@/shared/ui/core'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function AuthActionForm() {
    const [values, setValues] = useState({ email: '', password: '' })
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push('/accounts')
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <ActionForm handleSubmit={handleSubmit}>
            <InputForm type="email" placeholder="Email" name="email" onChange={handleInput} />
            <InputForm type="password" placeholder="Password" name="password" onChange={handleInput} />
            <ActionButton text="Sign in" color="primary" type="submit" />
        </ActionForm>
    )
}
