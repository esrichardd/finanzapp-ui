import {
    ActionLink,
    Container,
    Divider,
    LogoImage,
    RrssButton,
    Typography,
} from '@/shared/ui/core'
import { AuthActionForm } from './form/form'

export function AuthController() {
    return (
        <>
            <Container>
                <Container spacingHeight={36}>
                    <Typography
                        text={'Welcome to the most complete personal finance manager.'}
                        align="center"
                        weight="500"
                        fontFamily="secondary"
                    />
                </Container>
                <Container justify="center" spacingBotton={36}>
                    <LogoImage width={150} height={150} />
                </Container>
                <Container spacingBotton={24} gapRow={12}>
                    <RrssButton type="button" text="Login with Google" social="google" />
                    <RrssButton type="button" text="Login with Facebook" social="facebook" />
                </Container>
                <Container spacingBotton={12} gapRow={12}>
                    <AuthActionForm />
                </Container>
                <Container justify="center">
                    <ActionLink
                        href="/accounts"
                        text="Did you forget your password?"
                        size="12"
                        align="center"
                        weight="500"
                        color="primary-light"
                    />
                    <Divider borderHeight={70} spacing={4} />
                    <ActionLink
                        href="/auth/register"
                        text="Sign up for free by clicking here!"
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
