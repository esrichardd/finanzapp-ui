'use client'
import { ActionButton, ActionForm, InputForm } from '@/libs/ui/core'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function AuthActionForm() {
    const [values, setValues] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await signInCredentials()
            if (!res || res.error) {
                throw new Error('incorrect credentials')
            }
            router.push('/accounts')
        } catch (err) {
            handleSignInError(err)
        }
    }

    const signInCredentials = async () => {
        return signIn('credentials', { email: values.email, password: values.password, redirect: false })
    }

    const handleSignInError = (err: any) => {
        setLoading(false)
        console.log('err ->', err)
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <ActionForm handleSubmit={handleSubmit}>
            <InputForm type="email" placeholder="Email" name="email" onChange={handleInput} />
            <InputForm type="password" placeholder="Password" name="password" onChange={handleInput} />
            <ActionButton text="Sign in" color="primary" type="submit" loading={loading} disabled={loading} />
        </ActionForm>
    )
}
