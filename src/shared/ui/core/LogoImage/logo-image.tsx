import Image from 'next/image'
import { LogoImageProps } from '@/shared/utils/core/types'

export function LogoImage({ height = 100, width = 100 }: LogoImageProps) {
    return <Image src="logo-home.svg" alt="Finanzapp" width={height} height={width} />
}
