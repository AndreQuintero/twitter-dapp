import { StateCreator } from "zustand"

type AccountState = {
    id: string
}

type AccountActions = {
    setAccountId: (id: string) => void
}

export type AccountSlice = AccountState & AccountActions

export const createAccountSlice: StateCreator<AccountSlice, [['zustand/immer', never]], [], AccountSlice> = (set) => ({
    id: '',
    setAccountId: (id) => set( state => {
        state.id = id
    })
})