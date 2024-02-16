import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './styles.module.css';
import getInTouch from '../../../../../public/assents/images/get_in_touch.gif';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const SectionEight: React.FC = () => {
  const {t}=useTranslation();
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t('home.contact.errors.name')),
    lastName: Yup.string().required(t('home.contact.errors.lastName')),
    email: Yup.string().email(t('home.contact.errors.email2')).required(t('home.contact.errors.email1')),
    phone: Yup.string().required(t('home.contact.errors.phone')),
    message: Yup.string().required(t('home.contact.errors.message')),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <Image src={getInTouch} alt='getInTouch' className={styles.getInTouch}/>
      <div className={styles.title}>
        <h2>{t('home.contact.title')}</h2>
        <p>{t('home.contact.description01')}</p>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className={styles.form}>
          <div className={styles.shortInput}>
            <div className={styles.inputContainer}>
                <Field type="text" name="firstName" placeholder={t('home.contact.name')} className={styles.input} />
                <ErrorMessage name="firstName" component="div" className={styles.error} />
            </div>
            <div className={styles.inputContainer}>
                <Field type="text" name="lastName" placeholder={t('home.contact.lastName')} className={styles.input} />
                <ErrorMessage name="lastName" component="div" className={styles.error} />
            </div>             
          </div>
          <div className={styles.shortInput}>
            <div className={styles.inputContainer}>
                <Field type="text" name="email" placeholder={t('home.contact.email')} className={styles.input} />
                <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
            <div className={styles.inputContainer}>
                <Field type="text" name="phone" placeholder={t('home.contact.phone')} className={styles.input} />
                <ErrorMessage name="phone" component="div" className={styles.error} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <Field as="textarea" name="message" placeholder={t('home.contact.message')} className={styles.message}/>
            <ErrorMessage name="message" component="div" className={styles.error} />
          </div>
          <div className={styles.btnContainer}><button type="submit">{t('home.contact.button')}</button></div>
        </Form>
      </Formik>
    </div>
  );
};
