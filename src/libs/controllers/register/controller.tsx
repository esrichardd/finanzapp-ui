import { ActionLink, Container, LogoImage, Typography } from '@/libs/ui/core'
import { RegisterActionForm } from './form/form'

export function RegisterController() {
    return (
        <>
            <Container>
                <Container spacingHeight={36}>
                    <Typography
                        text={'Take control of your finances. Register now!'}
                        align="center"
                        weight="500"
                        fontFamily="secondary"
                    />
                </Container>
                <Container justify="center" spacingBottom={36}>
                    <LogoImage width={150} height={150} />
                </Container>
                <Container spacingBottom={12} gapRow={12}>
                    <RegisterActionForm />
                </Container>
                <Container justify="center">
                    <ActionLink
                        href="/login"
                        text="Do you have an account? Log in now!"
                        size="12"
                        align="center"
                        weight="600"
                        color="primary-light"
                    />
                </Container>
            </Container>
        </>
    )
}
