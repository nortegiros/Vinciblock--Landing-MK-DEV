import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './styles.module.css';
import getInTouch from '../../../../../public/assents/images/get_in_touch.gif';
import Image from 'next/image';

export const SectionEight: React.FC = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('El apellido es obligatorio'),
    email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es obligatorio'),
    phone: Yup.string().required('El teléfono es obligatorio'),
    message: Yup.string().required('El mensaje es obligatorio'),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <Image src={getInTouch} alt='getInTouch' className={styles.getInTouch}/>
      <div className={styles.title}>
        <h2>Get in touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, </p>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className={styles.form}>
          <div className={styles.shortInput}>
            <div className={styles.inputContainer}>
                <Field type="text" name="firstName" placeholder="Nombre" className={styles.input} />
                <ErrorMessage name="firstName" component="div" className={styles.error} />
            </div>
            <div className={styles.inputContainer}>
                <Field type="text" name="lastName" placeholder="Apellido" className={styles.input} />
                <ErrorMessage name="lastName" component="div" className={styles.error} />
            </div>             
          </div>
          <div className={styles.shortInput}>
            <div className={styles.inputContainer}>
                <Field type="text" name="email" placeholder="Email" className={styles.input} />
                <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
            <div className={styles.inputContainer}>
                <Field type="text" name="phone" placeholder="Teléfono" className={styles.input} />
                <ErrorMessage name="phone" component="div" className={styles.error} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <Field as="textarea" name="message" placeholder="Mensaje" className={styles.message}/>
            <ErrorMessage name="message" component="div" className={styles.error} />
          </div>
          <div className={styles.btnContainer}><button type="submit">SEND</button></div>
        </Form>
      </Formik>
    </div>
  );
};
