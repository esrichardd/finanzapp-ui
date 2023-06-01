import { NextRequest } from 'next/server'
import { Profile } from 'next-auth'
import bcrypt from 'bcrypt'
import { getFilteredDocuments, saveDocument } from '@/libs/persistence'
import { logger } from '@/libs/logger'

export async function handlerRegister(request: NextRequest) {
    const body = await request.json()
    const { name, email, password } = body

    const requiredFields = ['name', 'email', 'password']
    const missingFields = requiredFields.filter((field) => !body[field])
    if (missingFields.length > 0) {
        const errorMessages = missingFields.map((field) => `${field} is missing`).join(', ')
        logger.error(`Registration failed: ${errorMessages}`, 'handlerRegister')
        return createErrorResponse(errorMessages, 400)
    }

    if (await isEmailInUse(email)) {
        return createErrorResponse('Email already in use', 400)
    }

    try {
        const hashedPassword = await hashPassword(password)
        const user = await saveUser({ name, email, password: hashedPassword })

        return createSuccessResponse(user)
    } catch (error) {
        return createErrorResponse('An error occurred during registration', 500)
    }
}

async function createErrorResponse(message: string, status: number): Promise<Response> {
    logger.error(message, 'handlerRegister')
    return new Response(message, { status })
}

function createSuccessResponse(data: any): Response {
    const response = new Response(JSON.stringify({ ...data, password: null }), {
        headers: { 'content-type': 'application/json' },
    })
    logger.info('Success response', 'handlerRegister')
    return response
}

async function isEmailInUse(email: string): Promise<boolean> {
    const users = await getFilteredDocuments('users', [{ field: 'email', operator: '==', value: email }])
    return users.length > 0
}

async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
}

async function saveUser(user: { name: string; email: string; password: string }) {
    return saveDocument('users', user)
}

export async function googleRegister(profile: Profile) {
    try {
        const emailExists = await isEmailInUse(profile.email as string)
        if (emailExists) return false

        await saveDocument('users', {
            name: profile.name,
            email: profile.email,
        })

        logger.info(`Google registration successful: ${profile.email}`, 'googleRegister')
        return true
    } catch (error) {
        logger.error(`Google registration failed: ${error}`, 'googleRegister')
        return false
    }
}
