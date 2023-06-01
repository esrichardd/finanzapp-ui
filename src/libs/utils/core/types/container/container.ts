import { PropsWithChildren } from 'react'

export type ContainerProps = PropsWithChildren<{
    className?: string
    cols?: number
    spacingHeight?: number
    spacingBottom?: number
    spacingWidth?: number
    fullWidth?: boolean
    gapCol?: number
    gapRow?: number
    direction?: 'column' | 'row'
    justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
}>
