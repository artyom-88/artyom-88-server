import type { JSX, PropsWithChildren } from 'react';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from '@nextui-org/react';

import { ModalProps } from './commpon-components-types';

const CommonModal = ({
  children,
  footer,
  handleClose,
  header,
  isLoading,
  isOpen,
}: PropsWithChildren<ModalProps>): JSX.Element => (
  <Modal isOpen={isOpen} onClose={handleClose}>
    <ModalContent>
      {header ? <ModalHeader>{header}</ModalHeader> : null}
      {isLoading ? <Spinner /> : <ModalBody>{children}</ModalBody>}
      {footer ? <ModalFooter>{footer}</ModalFooter> : null}
    </ModalContent>
  </Modal>
);

export default CommonModal;
