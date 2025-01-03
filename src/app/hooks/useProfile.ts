import { useContract } from "./useContract"
import profileABI  from "@/app/abi/profileAbi.json"

export const useProfile = (accountId: string) => {
     const { getContract } = useContract(profileABI, process.env.NEXT_PUBLIC_PROFILE_CONTRACT_ADDRESS!)
     
     const getProfile = async () => {
        const contract = getContract()
        try{
            const profile = await contract.methods.getProfile(accountId).call({from : accountId})
            return profile
        } catch(e) {
            console.log(e)
        }
     }

     const setProfile = async (displayName: string, bio: string) => {
        const contract = getContract()
        try{
            await contract.methods.setProfile(displayName, bio).send({ from: accountId})
        } catch(e) {
            console.log(e)
        }
     }

     return {
        getProfile,
        setProfile
     }
}