import { useCallback } from "react";
import { useUIStore } from "../../zustand-store";
import { ModalMeta } from "../../types/modal";

export function useModal(modalFileName: string) {
  const openModal = useUIStore((state) => state.openModal);
  const closeModal = useUIStore((state) => state.closeModal);
  const isModalOpen = useUIStore((state) => state.isModalOpen);

  const onOpen = useCallback(
    (meta?: ModalMeta) => openModal(modalFileName, meta),
    [openModal, modalFileName]
  );

  const onClose = useCallback(
    () => closeModal(modalFileName),
    [closeModal, modalFileName]
  );

  const isOpen = isModalOpen(modalFileName);

  return {
    isOpen,
    onOpen,
    onClose,
  };
}
