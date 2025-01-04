import detectEthereumProvider from "@metamask/detect-provider"
import { web3Instance } from "../services/web3-client"
import { UseStoreType } from "../store"
import { useShallow } from "zustand/shallow"

export const useAccount = (useStore: UseStoreType) => {
    const { accountId, setAccount } = useStore(useShallow(state => ({
        accountId: state.id,
        setAccount: state.setAccountId
    })))
   

    async function connectAccount() {
        const provider = await detectEthereumProvider()
        if (provider) {

            const accounts = await web3Instance().requestAccounts()
            setAccount(accounts[0])

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