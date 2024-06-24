import { create } from "zustand";
import { ModalMeta, ModalMap } from "../types/modal";

interface UIState {
  modal: ModalMap;
  openModal: (modalFileName: string, meta?: ModalMeta) => void;
  closeModal: (modalFileName: string) => void;
  getOpenModalsList: () => string[];
  isModalOpen: (id: string) => boolean;
  getModalMeta: (id: string) => ModalMeta | undefined;
}

const initialState: ModalMap = {};

export const useUIStore = create<UIState>((set, get) => ({
  modal: initialState,
  openModal: (modalFileName: string, meta?: ModalMeta) =>
    set((state) => ({
      modal: {
        ...state.modal,
        [modalFileName]: { id: modalFileName, meta, open: true },
      },
    })),
  closeModal: (modalFileName: string) =>
    set((state) => {
      const currentModal = state.modal[modalFileName];
      if (!currentModal) return state;

      return {
        modal: {
          ...state.modal,
          [modalFileName]: { ...currentModal, open: false },
        },
      };
    }),
  getOpenModalsList: () =>
    Object.keys(get().modal).filter((modalId) => get().modal[modalId].open),
  isModalOpen: (id: string) => get().modal[id]?.open ?? false,
  getModalMeta: (id: string) => get().modal[id]?.meta,
}));
