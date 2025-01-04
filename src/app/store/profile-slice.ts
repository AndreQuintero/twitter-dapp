import { StateCreator } from "zustand"
import { Store } from "../types/store"

export type ProfileState = {
 displayName: string
 bio: string   
}

type ProfileActions = {
    setProfile: (profile: ProfileState) => void
}

export type ProfileSlice = ProfileState & ProfileActions

export const createProfileSlice: StateCreator<Store, [['zustand/immer', never]], [], ProfileSlice> = (set) => ({
    displayName: '',
    bio: '',
    setProfile: (profile) => set( state => {
        const { displayName, bio } = profile
        state.displayName = displayName
        state.bio = bio
    }),
})