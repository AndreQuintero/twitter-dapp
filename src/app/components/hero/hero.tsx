import { Introduction } from "@/app/layout/Introduction"
import { vstack } from "../../../../styled-system/patterns"
import { Button } from "@/app/ui/button"

export const Hero = () => {
    return (
        <div className={vstack({gap: '2rem'})}>
             <Introduction title='Twitter dApp' subtitle='A descentralized app to post your own tweets on sepolia blockchain.'/>
             <Button variant="secondary" size="large">Connect to Wallet</Button>
        </div>
    )
}