import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import { AuthStore } from '../auth-types';

export const useAuthToken = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        token: '',
        setToken: (token: string) => set(() => ({ token: token })),
      }),
      {
        name: 'auth-store',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
