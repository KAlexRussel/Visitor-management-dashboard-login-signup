import React from "react";
import "./styles.css";
// import "../../assets/bootstrap.min.css";
// import "../../assets/menu.css";
// import "./../../css/assets/fontawesome.css";
import "./../../assets/css/fontawesome.css";
import "../../assets/css/style.css";
// import "../../assets/bootstrap-select.min.css";
import "../../assets/css/animate.css";
import "../../assets/css/flaticon.css";
import axios from "axios";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [formValue, setFormValue] = useState(initialState);
  // const [formValue, setFormValue] = useState(initialState);
  const navigate = useNavigate();
  const initialValues = {
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
          navigate("/admindashboard");
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
    <div className="log_reg_form  loginss">
      <div className="signin-hidden-sbar">
        <div className="hsidebar-header">
          <h3 className="title fw-bold">Sign-In</h3>
        </div>
        <div className="hsidebar-content">
          <div className=" sidebar_area">
            <div className="login_form">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {(props) => (
                  <Form>
                    <div className="mb-2 mr-sm-2">
                      <label className="form-label mt-3 mb-3">
                        Email address:
                      </label>
                      <Field
                        type="email"
                        className="form-control"
                        placeholder="Ateba Ryan"
                        name="email"
                        value={props.values.email}
                        onChange={props.handleChange}
                      />
                      <p className="text-danger">
                        {<ErrorMessage name="email" />}
                      </p>
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label">Password:</label>
                      <Field
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={props.values.password}
                        onChange={props.handleChange}
                      />
                      <p className="text-danger">
                        {<ErrorMessage name="password" />}
                      </p>
                    </div>
                    {/* <div className="custom-control custom-checkbox">
                  <Field
                    type="checkbox"
                    className="custom-control-Field"
                    id="exampleCheck3"
                  />
                  <label className="custom-control-label" for="exampleCheck3">
                    Remember me
                  </label>
                  {/* <a className="btn-fpswd float-end" href="#">
                    Lost your password?
                  </a> 
                </div> */}
                    <button type="submit" className="btn btn-log btn-thm mt20">
                      Login
                    </button>
                    <p className="text-center mb-1 mt-2">
                      Don't have an account?
                      <a
                        className="fw-bold signup-filter-btn ms-1 "
                        href="/register"
                      >
                        Create account
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

export default Login;
