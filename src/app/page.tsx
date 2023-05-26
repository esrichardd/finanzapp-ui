import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

export const metadata = {
    title: 'Next PWA',
    description: 'Next PWA example using next-pwa and app directory',
}

export default async function Page() {
    const session = await getServerSession()
    if (!session) {
        redirect('/login')
    } else {
        redirect('/accounts')
    }
    return <></>
}
