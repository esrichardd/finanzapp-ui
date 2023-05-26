import bcrypt from 'bcrypt'
import { getFilteredDocuments } from '@/shared/persistence'

export type User = {
    id: string
    name: string
    email: string
    password?: string
}

export async function validate(credentials: Record<'email' | 'password', string>) {
    const users = await getFilteredDocuments('users', [{ field: 'email', operator: '==', value: credentials.email }])
    if (users.length === 0) return null
    const user = users[0] as User
    const isUser = await bcrypt.compare(credentials.password, user.password || '')
    if (isUser) return { ...user, password: undefined }
    else return null
}
