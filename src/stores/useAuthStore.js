import { create } from "zustand";


const useAuthStore = create((set) => ({
    authUser: false,
    openMenu: false,

    loginUser: () => {
        set({ authUser: true });
    },

    logoutUser: () => {
        set({ authUser: false });
    },

    openMenuFun: () => {
      set({set: !openMenu});
    }
    


}));

export default useAuthStore;