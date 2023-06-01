import { TypographyProps } from '@/libs/utils/core/types'
import './typography.scss'

export function Typography({
    text,
    variant,
    color = 'black',
    align = 'left',
    size = '16',
    weight = 'regular',
    className = '',
}: TypographyProps) {
    const Tag = variant || 'p'

    return (
        <Tag
            className={`Typography Typography-${variant} Typography-${color} Typography-${align} Typography-${size} Typography-${weight} ${className}`}
        >
            {text}
        </Tag>
    )
}
