import { TypographyProps } from '../typography'

export type ActionLinkProps = Omit<TypographyProps, 'variant'> & {
    href: string
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}
