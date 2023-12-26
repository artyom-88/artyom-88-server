import type { JSX } from 'react';
import { useCallback } from 'react';
import DatePicker from 'react-datepicker';

import { Button } from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import { Field, Form, Formik } from 'formik';
import CommonModal from 'src/common/components/CommonModal';
import { CareerModel } from 'src/common/types/common-career-types';

import { careerItemCreate, careerItemUpdate } from './career-api';
import { EMPTY_CAREER_ITEM } from './career-constants';
import styles from './CareerModal.module.scss';
import { useCareerItemQuery } from './hooks/use-career-item-query';
import { useCareerModal } from './hooks/use-career-modal';
import 'react-datepicker/dist/react-datepicker.css';

const CareerModal = (): JSX.Element => {
  const { id, isOpen, handleClose } = useCareerModal();
  const { data: initialValues = EMPTY_CAREER_ITEM, isPending } = useCareerItemQuery({ enabled: true, id });
  const { mutate, error } = useMutation({
    // TODO: update only changed values
    mutationFn: ({ _id: id, ...rest }: CareerModel) => (id ? careerItemUpdate(id, rest) : careerItemCreate(rest)),
    onSuccess: handleClose,
  });
  const onSubmit = useCallback(
    (values: CareerModel) => {
      console.log(values);
      mutate(values);
    },
    [mutate]
  );

  return (
    <CommonModal header='Add career item' isOpen={isOpen} isLoading={isPending} handleClose={handleClose}>
      <Formik<CareerModel> initialValues={initialValues} onSubmit={onSubmit}>
        <Form className='flex flex-col w-full'>
          <div className={styles.formItem}>
            <Field type='text' name='title' placeholder='Title' />
          </div>
          <div className={styles.formItem}>
            <Field type='text' name='post' placeholder='Post' />
          </div>
          <div className={styles.formItem}>
            <Field type='text' name='site' placeholder='Site' />
          </div>
          <div className={styles.formItem}>
            <Field type='text' name='tools' placeholder='Tools' />
          </div>
          <div className={styles.formItem}>
            <Field type='text' name='description' placeholder='Description' />
          </div>
          <div className={styles.formItem}>
            <Field>{({ value, onChange }) => <DatePicker onChange={onChange} selected={value} />}</Field>
          </div>
          {error && error.message}
          <div className='w-full flex align-middle justify-center'>
            <Button type='submit'>Submit</Button>
            <span>&nbsp;</span>
            <Button onClick={handleClose}>Cancel</Button>
          </div>
        </Form>
      </Formik>
    </CommonModal>
  );
};

export default CareerModal;
