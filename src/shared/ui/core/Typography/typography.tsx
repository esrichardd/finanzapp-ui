import { TypographyProps } from '@/shared/utils/core/types'
import './typography.scss'

export function Typography({ text, color, variant, className, align, size, weight }: TypographyProps) {
    switch (variant) {
        case 'h1':
            return (
                <h1
                    className={`Typography Typography-${variant} Typography-${color} Typography-${align} Typography-${size} Typography-${weight} ${className}`}
                >
                    {text}
                </h1>
            )
        case 'h2':
            return (
                <h2
                    className={`Typography Typography-${variant} Typography-${color} Typography-${align} Typography-${size} Typography-${weight} ${className}`}
                >
                    {text}
                </h2>
            )
        case 'h3':
            return (
                <h3
                    className={`Typography Typography-${variant} Typography-${color} Typography-${align} Typography-${size} Typography-${weight} ${className}`}
                >
                    {text}
                </h3>
            )
        case 'h4':
            return (
                <h4
                    className={`Typography Typography-${variant} Typography-${color} Typography-${align} Typography-${size} Typography-${weight} ${className}`}
                >
                    {text}
                </h4>
            )
        case 'h5':
            return (
                <h5
                    className={`Typography Typography-${variant} Typography-${color} Typography-${align} Typography-${size} Typography-${weight} ${className}`}
                >
                    {text}
                </h5>
            )
        case 'h6':
            return (
                <h6
                    className={`Typography Typography-${variant} Typography-${color} Typography-${align} Typography-${size} Typography-${weight} ${className}`}
                >
                    {text}
                </h6>
            )
        default:
            return (
                <p
                    className={`Typography Typography-p Typography-${color} Typography-${align} Typography-${size} Typography-${weight} ${className}`}
                >
                    {text}
                </p>
            )
    }
}
