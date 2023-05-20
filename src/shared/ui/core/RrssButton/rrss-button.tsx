import { RrssButtonProps } from '@/shared/utils/core/types/rrss-button'
import './rrss-button.scss'
import Image from 'next/image'

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
