'use client'
import { ActionButton, ActionForm, InputForm } from "@/shared/ui/core";
import { useState } from "react";

export function RegisterActionForm() {

    const [values, setValues] = useState({ email: '', password: '' });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(values)
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    return (<ActionForm handleSubmit={handleSubmit} >
        <InputForm type="text" placeholder="Name" name="name" onChange={handleInput} />
        <InputForm type="email" placeholder="Email" name="email" onChange={handleInput} />
        <InputForm type="password" placeholder="Password" name="password" onChange={handleInput} />
        <InputForm type="password" placeholder="Repeat your password" name="password" onChange={handleInput} />
        <ActionButton text="Register now!" color="primary" type="submit" />
    </ActionForm>)
}