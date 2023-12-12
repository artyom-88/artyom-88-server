import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { CareerModalStore } from '../career-types';

export const useCareerModal = create<CareerModalStore>()(
  devtools(
    (set) => ({
      handleClose: () => set(() => ({ isOpen: false, id: null })),
      id: null,
      isOpen: false,
      handleOpen: (id = null) => set(() => ({ isOpen: true, id: id })),
    }),
    {
      name: 'career-modal-store',
    }
  )
);
