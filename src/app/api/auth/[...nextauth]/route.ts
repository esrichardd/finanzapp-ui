import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { validate } from '@/libs/utils/auth-validation'
import { googleRegister } from '@/libs/client-api/register/register'

const handler = NextAuth({
    callbacks: {
        async signIn({ account, profile }) {
            if (account && profile && account.provider === 'google') {
                return googleRegister(profile)
            }

            return true
        },
        async redirect({ url, baseUrl }) {
            if (url.endsWith('/login')) return `${baseUrl}/accounts`
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (!credentials) return null
                return validate(credentials)
            },
        }),
    ],
})

export { handler as GET, handler as POST }
