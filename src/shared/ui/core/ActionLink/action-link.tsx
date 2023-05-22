import Link from 'next/link'
import { ActionLinkProps } from '@/shared/utils/core/types'
import { Typography } from '../Typography'
import './action-link.scss'

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
