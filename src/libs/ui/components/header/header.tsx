import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Container } from '@/libs/ui/core'
import { MenuComponent } from '../menu/menu'

import './header.scss'
export function HeaderComponent({ backPage }: { backPage?: string }) {
    return (
        <>
            <Container
                cols={2}
                fullWidth={true}
                justify="space-between"
                spacingHeight={24}
                spacingWidth={24}
                className="Container-header"
            >
                {backPage ? <AiOutlineArrowLeft className="Header-icon" /> : <div></div>}
                <MenuComponent />
            </Container>
        </>
    )
}
