import { ContainerProps } from '@/shared/utils/core/types'
import './container.scss'

export function Container({
    children,
    justify,
    spacingBotton,
    className = '',
    direction = 'column',
    cols = 1,
    spacingHeight = 0,
    spacingWidth = 0,
    gapCol = 0,
    gapRow = 0,
    fullWidth = false,
}: ContainerProps) {
    return (
        <>
            <div
                className={`Container Container-cols-${cols} Container-spacing-${spacingHeight}-${spacingWidth} Container-gap-${gapCol}-${gapRow} ${spacingBotton ? `Container-spacing-bottom-${spacingBotton}` : ''
                    } ${justify ? `Container-flex-${direction}-${justify}` : ''} ${fullWidth ? 'Container-full-width' : ''} ${className}`}
            >
                {children}
            </div>
        </>
    )
}
