'use client'
import Image from 'next/image'
import { RrssButtonProps } from '@/libs/utils/core/types'
import './rrss-button.scss'

export function RrssButton({ text, type, social, handleClick, className = '' }: RrssButtonProps) {
    return (
        <button
            onClick={handleClick}
            className={`RrssButton-button RrssButton-button-${social} ${className}`}
            type={type}
        >
            <span className={`RrssButton-button-${social}-icon`}>
                <Image src={`./icons/${social}.svg`} fill={true} alt="icon" />
            </span>
            {text}
        </button>
    )
}
