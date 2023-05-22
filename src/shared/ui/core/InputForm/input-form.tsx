import { InputFormProps } from '@/shared/utils/core/types'
import './input-form.scss'

export function InputForm({ type, name, label, placeholder, value, className, onChange }: InputFormProps) {
    return (
        <div className="InputForm">
            {label && (
                <label htmlFor={name} className="InputForm-label">
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                aria-label={label}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange && onChange(e)}
                className={`InputForm-input ${className}`}
            />
        </div>
    )
}
