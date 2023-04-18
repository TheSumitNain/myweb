import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Icon } from "@iconify/react";
import Footer from "./Footer";

const Contact = () => {
  const [state, setState] = useState();

  const formSparkURL = "https://submit-form.com/NuSEHagg";

  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const validationSchema = yup.object({
    fullName: yup.string().min(3).max(30).trim().required("required"),
    email: yup.string().email().required("required"),
    message: yup.string().min(3).max(200).trim().required("required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setState(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const postSubmission = async () => {
    const payload = {
      fullName: state.fullName,
      email: state.email,
      message: state.message,
    };

    try {
      const result = await axios.post(formSparkURL, payload);
      alert("Message send Successfully");
      setState(null);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (state) {
      postSubmission();
    }
  }, [state]);

  return (
    <>
      <div className="contact">
        <div className="contact_main">
          

          <div className="contact_form">
            <h4>Send Us A Message</h4>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div>
                  {/* <label htmlFor="fullName">Full Name*</label> <br /> */}
                  <Field data-aos="zoom-in-left" type="text" name="fullName" placeholder="full name *" className="myinput" />
                  <p className="error">
                    <ErrorMessage name="fullName" />
                  </p>
                </div>
                <div>
                  {/* <label htmlFor="email">Email*</label> <br /> */}
                  <Field data-aos="zoom-in-left" type="email"  name="email" placeholder="email *" className="myinput" />
                  <p className="error">
                    <ErrorMessage name="email" />
                  </p>
                </div>
                <div>
                  {/* <label htmlFor="message">Message*</label> <br /> */}
                  <Field as="textarea" data-aos="zoom-in-left" name="message" placeholder="type your message here... *" className="myinput" />
                  <p className="error">
                    <ErrorMessage name="message" />
                  </p>
                </div>
                <div>
                  <button type="reset">reset</button>
                  <button type="submit">send</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
