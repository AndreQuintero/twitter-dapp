"use client"
import { Input, InputRefProps } from "@/app/ui/input"
import { vstack } from "../../../../styled-system/patterns"
import { Button } from "@/app/ui/button"
import { css } from "../../../../styled-system/css"
import { FormEvent, useRef } from "react"
import { useAccount, useProfile } from "@/app/hooks"
import { useStore } from "@/app/store"

export const Account = () => {
    const { changeProfile } = useProfile(useStore, useAccount)
    const usernameRef = useRef<InputRefProps>(null)
    const bioRef = useRef<InputRefProps>(null)
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const userName = usernameRef.current?.getValue() ?? ''
        const bio = bioRef.current?.getValue() ?? ''
        await changeProfile(userName, bio)

    }
    return (
        <div className={vstack({mt: '2rem'})}>
            <p className={css({fontSize: '1.6rem', textAlign: 'center', fontWeight: 500})}>
                It seems you still don&apos;t have an account, let&apos;s create one!
            </p>
            <form onSubmit={onSubmit} className={vstack({gap: '1rem'})}>
                <Input ref={usernameRef}  placeholder="username"/>
                <Input ref={bioRef} placeholder="Bio"/>
                <Button type="submit">Create</Button>
            </form>
        </div>
    )
}