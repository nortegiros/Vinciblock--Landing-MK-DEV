import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import styles from './styles.module.css';
import getInTouch from '../../../../../public/assents/images/get_in_touch.gif';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export const SectionEight: React.FC = () => {
  const {t}=useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
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

  const onSubmit = (values: any, formikHelpers: FormikHelpers<any>) => {
    const formElement = formRef.current;
  
    if (formElement) {
      emailjs
        .sendForm(
          "service_a8whzxg",
          "template_797i3bu",
          formElement,
          "B24x0IgrandYKdN-P"
        )
        .then(
          (result) => {
            console.log(result)
            toast.success(t('home.contact.success'));
            formikHelpers.resetForm();
          },
          (error) => {
            toast.error(t('home.contact.error'));
          }
        );
    } else {
      console.error("Form element is null");
    }
  };

  return (
    <div className={styles.container} id="contact">
      <Image src={getInTouch} alt='getInTouch' className={styles.getInTouch}/>
      <div className={styles.title}>
        <h2>{t('home.contact.title')}</h2>
        <p>{t('home.contact.description01')}</p>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className={styles.form} ref={formRef}>
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
