import { useShallow } from "zustand/shallow"
import { ProfileState, UseStoreType } from "../store"
import { useContract } from "./useContract"
import profileABI  from "@/app/abi/profileAbi.json"
import { UseAccount } from "."
import { useCallback } from "react"

export const useProfile = (useStore: UseStoreType, useAccount: UseAccount) => {
     const { getContract } = useContract(profileABI, process.env.NEXT_PUBLIC_PROFILE_CONTRACT_ADDRESS!)
     const { isConnected } = useAccount(useStore)
     const { accountId, setProfile, displayName } = useStore(useShallow(state => ({
        accountId: state.id,
        setProfile: state.setProfile,
        displayName: state.displayName
     })))

    
     const getProfile = useCallback(async () => {
        const contract = getContract()
        try{
            const profile: ProfileState = await contract.methods.getProfile(accountId).call({from : accountId})
            setProfile(profile)
        } catch(e) {
            console.log(e)
        }
     }, [accountId, getContract, setProfile])

  
     const changeProfile = async (displayName: string, bio: string) => {
        const contract = getContract()
        try{
            await contract.methods.setProfile(displayName, bio).send({ from: accountId})
            setProfile({displayName, bio})
        } catch(e) {
            console.log(e)
        }
     }

     const profileExists = () => {
       if(isConnected() && displayName !== '') {
            return true
       }
       return false
     }

     return {
        getProfile,
        changeProfile,
        profileExists
     }
}