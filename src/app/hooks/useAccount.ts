import detectEthereumProvider from "@metamask/detect-provider"
import { useState } from "react"
import { web3Instance } from "../services/web3-client"

export const useAccount = () => {
    const [accountId, setAccountId] = useState<string>('')
    
    const connectAccount = async () => {
        const provider = await detectEthereumProvider()
        if(provider) {
            
            const accounts = await web3Instance().requestAccounts()
            setAccountId(accounts[0])

        } else {
            alert("please, install metamask to login")
        }
    }

     const isConnected = () => accountId.length > 0 ? true : false

    return {
        accountId,
        connectAccount,
        isConnected
    }
}