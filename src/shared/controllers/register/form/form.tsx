'use client'
import { post } from '@/shared/rest-client'
import { ActionButton, ActionForm, InputForm } from '@/shared/ui/core'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function RegisterActionForm() {
    const [values, setValues] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault()
        post('/api/register', { body: { ...values } })
            .then((_res) => {
                router.push('/login')
            })
            .catch((err) => {
                console.log('err ->', err)
                setLoading(false)
            })
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
