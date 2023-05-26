import { NextRequest } from 'next/server'
import bcrypt from 'bcrypt'
import { getFilteredDocuments, saveDocument } from '@/shared/persistence'
import { Profile } from 'next-auth'

export async function handlerRegister(request: NextRequest) {
    const body = await request.json()
    if (!body.name || !body.email || !body.password) {
        return new Response('Missing name, email or password', { status: 400 })
    }

    const isValid = await validateEmail(body.email)
    if (!isValid) {
        return new Response('Email already in use', { status: 400 })
    }

    const user = await saveDocument('users', {
        name: body.name,
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
    })

    return new Response(JSON.stringify({ ...user, password: null }), {
        headers: { 'content-type': 'application/json' },
    })
}

export async function googleRegister(profile: Profile) {
    const emailExists = await validateEmail(profile.email as string)
    if (emailExists) return false
    await saveDocument('users', {
        name: profile.name,
        email: profile.email,
    })

    return true
}

async function validateEmail(email: string) {
    const users = await getFilteredDocuments('users', [{ field: 'email', operator: '==', value: email }])
    console.log('users found', users)
    if (users.length > 0) return false
    else return true
}
