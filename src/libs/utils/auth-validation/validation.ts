import bcrypt from 'bcrypt'
import { getFilteredDocuments } from '@/libs/persistence'

export type User = {
    id: string
    name?: string
    email?: string
    password?: string
}

export async function validate(credentials: Record<'email' | 'password', string>): Promise<User | null> {
    const users = await getFilteredDocuments('users', [{ field: 'email', operator: '==', value: credentials.email }])
    const user = users.length > 0 ? (users[0] as User) : null
    const isUser = user ? await bcrypt.compare(credentials.password, user.password ?? '') : false

    if (isUser) {
        // Ensure the returned user object has the 'id' property
        return { ...user, password: undefined, id: user?.id ?? '' }
    } else {
        return null
    }
}
