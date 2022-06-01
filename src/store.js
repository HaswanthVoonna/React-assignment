import create from 'zustand'

import {devtools, persist} from 'zustand/middleware'

let userStore = set => ({
  user: null,
  addUser: (data) => {
    set((state) => ({ 
        user: data,
    }))
  },
});

userStore = devtools(userStore)
userStore = persist(userStore, { name: 'user_settings' })

export const useStore = create(userStore)
