import { StateCreator } from "zustand"
import { Store } from "../types/store"

type AccountState = {
    id: string
}

type AccountActions = {
    setAccountId: (id: string) => void
}

export type AccountSlice = AccountState & AccountActions

export const createAccountSlice: StateCreator<Store, [['zustand/immer', never]], [], AccountSlice> = (set) => ({
    id: '',
    setAccountId: (id) => set( state => {
        state.id = id
    })
})