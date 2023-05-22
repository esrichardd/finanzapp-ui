import Image from 'next/image'
import { RrssButtonProps } from '@/shared/utils/core/types'
import './rrss-button.scss'

export function RrssButton({ text, type, social, className = '' }: RrssButtonProps) {
    return (
        <button className={`RrssButton-button RrssButton-button-${social} ${className}`} type={type}>
            <span className={`RrssButton-button-${social}-icon`}>
                <Image src={`./icons/${social}.svg`} fill={true} alt="icon" />
            </span>
            {text}
        </button>
    )
}
