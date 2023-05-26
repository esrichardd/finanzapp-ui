'use client'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { ActionButton, Container } from '@/shared/ui/core'
import './menu.scss'
import { signOut } from 'next-auth/react'

export function MenuComponent() {
    const [open, setOpen] = useState(false)
    return (
        <div className="Menu-component">
            <AiOutlineMenu onClick={() => setOpen(true)} className="Menu-component-icon" />
            {open && <PanelMenuComponent open={open} setOpen={setOpen} />}
        </div>
    )
}

function PanelMenuComponent({ setOpen, open }: { setOpen: Function; open: boolean }) {
    return (
        <Container
            fullWidth={true}
            className={`Panel-menu-component ${open ? 'open' : 'close'}`}
            spacingHeight={24}
            spacingWidth={36}
        >
            <ActionButton color="primary" text="close menu" type="button" handleClick={() => setOpen(false)} />
            <ActionButton color="danger" text="logout" type="button" handleClick={() => signOut()} />
        </Container>
    )
}
