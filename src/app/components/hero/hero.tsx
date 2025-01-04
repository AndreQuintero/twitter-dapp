"use client"
import { Introduction } from "@/app/layout/introduction"
import { vstack } from "../../../../styled-system/patterns"
import { Button } from "@/app/ui/button"
import { useEffect } from "react"
import { useAccount, useProfile } from "@/app/hooks"
import { useStore } from "@/app/store"

export const Hero = () => {
    
    const { connectAccount, isConnected } = useAccount(useStore)
    const accountId = useStore(state => state.id)
    const { getProfile: _getProfile } = useProfile(useStore, useAccount)

   useEffect(() => {
    if(isConnected()) {
        getProfile()
    }
   }, [accountId])
        
    const getProfile = async () => {
        await _getProfile()
    }
    

    return (
        <div className={vstack({gap: '2rem'})}>
            <Introduction title='Twitter dApp' subtitle='A descentralized app to post your own tweets on sepolia blockchain.'/>
            <Button onClick={connectAccount} variant="primary" size="large">{isConnected() ? accountId : 'Connect to Metamask'}</Button>
        </div>
    )
}