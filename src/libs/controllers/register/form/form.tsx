'use client'
import { restApi } from '@/libs/rest-client'
import { ActionButton, ActionForm, InputForm } from '@/libs/ui/core'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function RegisterActionForm() {
    const [values, setValues] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        try {
            await registerUser()
            router.push('/login')
        } catch (err) {
            handleRegisterError(err)
        }
    }

    const registerUser = async () => {
        await restApi.post('/register', { ...values })
    }

    const handleRegisterError = (err: any) => {
        console.log('err ->', err)
        setLoading(false)
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <ActionForm handleSubmit={handleSubmit}>
            <InputForm type="text" placeholder="Name" name="name" onChange={handleInput} />
            <InputForm type="email" placeholder="Email" name="email" onChange={handleInput} />
            <InputForm type="password" placeholder="Password" name="password" onChange={handleInput} />
            <InputForm type="password" placeholder="Repeat your password" name="password" onChange={handleInput} />
            <ActionButton text="Register now!" color="primary" type="submit" loading={loading} disabled={loading} />
        </ActionForm>
    )
}
