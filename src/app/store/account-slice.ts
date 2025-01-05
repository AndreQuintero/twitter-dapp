import { StateCreator } from "zustand"
import { Store } from "../types/store"

type AccountState = {
    id: string
    isConnected: boolean
}

type AccountActions = {
    setAccountId: (id: string) => void
    setIsConnected: (connected: boolean) => void
}

export type AccountSlice = AccountState & AccountActions

export const createAccountSlice: StateCreator<Store, [['zustand/immer', never]], [], AccountSlice> = (set) => ({
    id: '',
    isConnected: false,
    setAccountId: (id) => set( state => {
        state.id = id
    }),
    setIsConnected: (connected) => set(state => {
        state.isConnected = connected
    })
})