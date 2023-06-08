import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      axios
        .post("http://localhost:8080/api/form", values) // no try/catch here
        .then((response) => {
          console.log(response);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.response);
        });
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      // actions.setSubmitting(false);
    }, 400);

    // console.log(props);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("please enter a valid email")
      .required("required"),
    password: Yup.string()
      .min(8, "password minimum length should be 8")
      .required("required"),
  });

  return (
    <div className="loginss log_reg_form ">
      <div className="signup-hidden-sbar">
        <div className="hsidebar-header">
          {/* <div className="sidebar-close-icon">
            <span className="flaticon-close"></span>
          </div> */}
          <h4 className="title fw-bold">Create Your Account</h4>
        </div>
        <div className="hsidebar-content">
          <div className="sidebar_area">
            <div className="sign_up_form">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {(props) => (
                  <Form>
                    <div className="form-group">
                      <label className="form-label">Username:</label>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="ryan"
                        name="username"
                        value={props.values.username}
                        onChange={props.handleChange}
                      />
                      <p className="text-danger">
                        {<ErrorMessage name="username" />}
                      </p>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Your Email:</label>
                      <Field
                        type="email"
                        className="form-control"
                        placeholder="creativelayers088@gmail.com"
                        name="email"
                        value={props.values.email}
                        onChange={props.handleChange}
                      />
                      <p className="text-danger">
                        {<ErrorMessage name="email" />}
                      </p>
                    </div>
                    <div className="form-group mb20">
                      <label className="form-label">Password:</label>
                      <Field
                        type="password"
                        className="form-control"
                        placeholder="******************"
                        name="password"
                        value={props.values.password}
                        onChange={props.handleChange}
                      />
                      <p className="text-danger">
                        {<ErrorMessage name="password" />}
                      </p>
                    </div>
                    <button type="submit" className="btn btn-signup btn-thm">
                      Create Account
                    </button>
                    <p className="text-center mb25 mt10">
                      Already have an account?
                      <a href="/" className="fw-bold">
                        Sign in
                      </a>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
