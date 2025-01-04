import { create } from "zustand";
import { Store } from "../types/store";
import { createAccountSlice } from "./account-slice"
import { immer } from "zustand/middleware/immer";

export const useStore = create<Store>()(immer((...a) => ({
    ...createAccountSlice(...a)
})))

export type UseStoreType = typeof useStore