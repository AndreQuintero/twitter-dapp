import { Input } from "@/app/ui/input"
import { vstack } from "../../../../styled-system/patterns"
import { Button } from "@/app/ui/button"
import { css } from "../../../../styled-system/css"

export const Account = () => {
    return (
        <div className={vstack({mt: '2rem'})}>
            <p className={css({fontSize: '1.6rem', textAlign: 'center', fontWeight: 500})}>
                It seems you still don&apos;t have an account, let&apos;s create one!
            </p>
            <form className={vstack({gap: '1rem'})}>
                <Input placeholder="username"/>
                <Input placeholder="Bio"/>
                <Button>Create</Button>
            </form>
        </div>
    )
}