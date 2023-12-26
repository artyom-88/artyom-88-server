import type { ReactNode } from 'react';

export interface ModalProps {
  footer?: ReactNode;
  handleClose: () => void;
  header?: ReactNode;
  isLoading?: boolean;
  isOpen: boolean;
}
