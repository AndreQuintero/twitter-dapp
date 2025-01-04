import { create } from "zustand";
import { Store } from "../types/store";
import { createAccountSlice } from "./account-slice"
import { createProfileSlice, ProfileState } from './profile-slice'
import { immer } from "zustand/middleware/immer";

export const useStore = create<Store>()(immer((...a) => ({
    ...createAccountSlice(...a),
    ...createProfileSlice(...a)
})))

type UseStoreType = typeof useStore

export type {UseStoreType, ProfileState}