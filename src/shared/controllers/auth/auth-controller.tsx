import {
    ActionButton,
    ActionLink,
    Container,
    Divider,
    InputForm,
    LogoImage,
    RrssButton,
    Typography,
} from '@/shared/ui/core'
import './auth-controller.scss'

export default function AuthController() {
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
                    <InputForm type="email" placeholder="Email" />
                    <InputForm type="text" placeholder="Password" />
                    <ActionButton text="Sign in" color="primary" type="button" />
                </Container>
                <Container justify="center">
                    <ActionLink
                        href="/auth"
                        text="Did you forget your password?"
                        size="12"
                        align="center"
                        weight="500"
                        color="primary-light"
                    />
                    <Divider borderHeight={70} spacing={4} />
                    <ActionLink
                        href="/auth"
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
