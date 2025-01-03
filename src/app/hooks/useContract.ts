import { ContractAbi } from "web3"
import { web3Instance } from "../services/web3-client"

export const useContract = (abi: ContractAbi, contractAddress: string) => {
    const CHAIN = process.env.NEXT_PUBLIC_CHAIN ?? 'sepolia'
    const getContract = () => {
        const web = web3Instance()
        const contract = new web.Contract(abi, contractAddress)
        contract.setConfig({
            defaultChain: CHAIN
        })
        return contract
    }
   return {
    getContract
   }
}