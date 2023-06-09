import { DividerProps } from '@/libs/utils/core/types'
import './divider.scss'
export function Divider({ spacing, spacingBottom, borderWidth = 1, borderHeight = 100 }: DividerProps) {
    return (
        <span
            className={`Divider ${spacing ? 'Divider-spacing-' + spacing : ''} ${
                spacingBottom ? 'Divider-spacing-bottom-' + spacingBottom : ''
            } Divider-${borderWidth}-${borderHeight}`}
        ></span>
    )
}
