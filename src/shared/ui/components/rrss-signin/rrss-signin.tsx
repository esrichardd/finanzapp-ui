'use client'

import { signIn } from 'next-auth/react'
import { RrssButton } from '../../core'

export function RrssSignInComponent() {
    return (
        <>
            <RrssButton
                handleClick={() => signIn('google', { redirect: false })}
                type="button"
                text="Login with Google"
                social="google"
            />
            <RrssButton type="button" text="Login with Facebook" social="facebook" />
        </>
    )
}
