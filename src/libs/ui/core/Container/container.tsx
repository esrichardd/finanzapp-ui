import { ContainerProps } from '@/libs/utils/core/types'
import './container.scss'

export function Container({
    children,
    justify,
    spacingBottom,
    className,
    direction = 'column',
    cols = 1,
    spacingHeight = 0,
    spacingWidth = 0,
    gapCol = 0,
    gapRow = 0,
    fullWidth = false,
}: ContainerProps) {
    const containerClassNames = [
        `Container Container-cols-${cols}`,
        `Container-spacing-${spacingHeight}-${spacingWidth}`,
        `Container-gap-${gapCol}-${gapRow}`,
        spacingBottom && `Container-spacing-bottom-${spacingBottom}`,
        justify && `Container-flex-${direction}-${justify}`,
        fullWidth && 'Container-full-width',
        className && `${className}`,
    ]
        .filter(Boolean)
        .join(' ')

    return <div className={containerClassNames}>{children}</div>
}
