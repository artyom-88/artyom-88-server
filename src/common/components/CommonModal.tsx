import type { JSX, PropsWithChildren } from 'react';

import { Modal } from '@mui/base/Modal';

import styles from './CommonModal.module.scss';
import { ModalProps } from './commpon-components-types';

const CommonModal = ({ children, isLoading, isOpen, handleClose }: PropsWithChildren<ModalProps>): JSX.Element => (
  <Modal className={styles.modal} open={isOpen} onClose={handleClose}>
    <div className={`ag-flexbox ag-flexColumn ag-justifyContent_center ag-alignItems_center ${styles.content}`}>
      {isLoading ? <div>Loading...</div> : children}
    </div>
  </Modal>
);

export default CommonModal;
