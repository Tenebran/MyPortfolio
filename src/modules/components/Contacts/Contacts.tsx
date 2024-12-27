import React from 'react';
import './Contacts.scss';
import { Fade } from 'react-awesome-reveal';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import emailjs from 'emailjs-com';
import { useFormik } from 'formik';

export type EmailData = {
  email: string;
  messages: string;
  name: string;
};

type FormikErrorType = Partial<EmailData>;

export default function Contacts() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      messages: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.messages) {
        errors.messages = 'Required messages';
      } else if (values.messages.length < 10) {
        errors.messages = 'Message must be at least 10 characters long';
      }

      if (!values.name) {
        errors.name = 'Required name';
      } else if (values.name.length < 3) {
        errors.name = 'Name must be at least 3 characters long';
      }
      return errors;
    },

    onSubmit: (values, { resetForm }) => {
      emailjs.send('sergej_garkusha', 'template_jfhx7uo', values, '3HQ8iT10tSgZUprx6').then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
          resetForm();
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send message, please try again.');
        }
      );
    },
  });

  const buttonDisabled =
    formik.values.email &&
    formik.values.messages &&
    formik.values.name &&
    !formik.errors.email &&
    !formik.errors.messages &&
    !formik.errors.name
      ? false
      : true;

  // #ff5555
  return (
    <div className="contacts">
      <div className="container contacts__container">
        <Fade>
          <SectionTitle title={'CONTACTS'} />

          <div className="contacts__form__wrapper">
            <form className="contacts__form" onSubmit={formik.handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="contacts__form__name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="contacts__form__error">{formik.errors.name}</div>
              )}
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="contacts__form__email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="contacts__form__error">{formik.errors.email}</div>
              )}
              <textarea
                name="messages"
                placeholder="Messages"
                className="contacts__form__text"
                value={formik.values.messages}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}></textarea>
              {formik.touched.messages && formik.errors.messages && (
                <div className="contacts__form__error">{formik.errors.messages}</div>
              )}
              <button
                disabled={buttonDisabled}
                className={
                  buttonDisabled ? 'contacts__form__button-disabled' : 'contacts__form__button'
                }
                type="submit">
                Send
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
}
