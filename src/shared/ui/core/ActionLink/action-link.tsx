import Link from 'next/link'
import './action-link.scss'
import { Typography } from '../Typography'
import { ActionLinkProps } from '@/shared/utils/core/types/action-link'

export function ActionLink(props: ActionLinkProps) {
    const { href } = props
    return (
        <>
            <Link href={href} className="ActionLink-link">
                <Typography {...props} className="ActionLink-link-p" />
            </Link>
        </>
    )
}
