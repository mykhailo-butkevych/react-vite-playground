// ./components/modal/LazyComponent.tsx

import React, { Suspense, lazy } from "react";
import ErrorBoundary from "../../../../modules/error-boundary";
import { useUIStore } from "../../zustand-store";

interface ILazyComponentProps {
  filename: string;
}

function LazyComponent({ filename }: ILazyComponentProps) {
  console.log(`loading ./${filename}/${filename}.tsx`);

  const isOpen = useUIStore((state) => state.isModalOpen(filename));
  const meta = useUIStore((state) => state.getModalMeta(filename));
  const closeModal = useUIStore((state) => state.closeModal);

  const handleModalClose = () => {
    closeModal(filename);
  };

  const Component = lazy(() => import(`./${filename}/${filename}.tsx`));

  return (
    <Suspense fallback={null}>
      <ErrorBoundary>
        {filename ? (
          <Component isOpen={isOpen} onClose={handleModalClose} {...meta} />
        ) : null}
      </ErrorBoundary>
    </Suspense>
  );
}

export default LazyComponent;
