import { ActionButtonProps } from '../action-button'

export type RrssButtonProps = Omit<ActionButtonProps, 'color'> & {
    social: 'facebook' | 'twitter' | 'google' | 'linkedin'
}
