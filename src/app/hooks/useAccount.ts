/* eslint-disable react-hooks/exhaustive-deps */
import detectEthereumProvider from "@metamask/detect-provider"
import { useEffect, useState } from "react"
import { web3Instance } from "../services/web3-client"
import { UseStoreType } from "../store"

export const useAccount = (useStore: UseStoreType) => {
    const [accountId, setAccountId] = useState<string>('')
    const setAccount = useStore( state => state.setAccountId)
    useEffect( () => {
        if(isConnected()) {
             setAccount(accountId)
        }
    }, [accountId])

    async function connectAccount() {
        const provider = await detectEthereumProvider()
        if (provider) {

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