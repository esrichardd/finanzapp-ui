import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import { HeaderComponent } from '@/libs/ui/components'
import { ActionButton, Container, LogoImage } from '@/libs/ui/core'

export default async function AccountsController() {
    const session = await getServerSession()
    if (!session) {
        redirect('/login')
    }

    return (
        <>
            <HeaderComponent />
            <Container justify="center" spacingHeight={24}>
                <LogoImage width={150} height={150} />
            </Container>
            <Container justify="center" gapRow={12}>
                <ActionButton color="primary" text="ADD INCOME" type="button" />
                <ActionButton color="danger" text="ADD EXPENSE" type="button" />
            </Container>
        </>
    )
}
