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

const AddVisitor = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    firstname: "",
    lastname: "",
    address: "",
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
    firstname: Yup.string()
      .min(3, "password minimum length should be 3")
      .required("required"),
    lastname: Yup.string()
      .min(3, "password minimum length should be 3")
      .required("required"),
    email: Yup.string()
      .email("please enter a valid email")
      .required("required"),
    password: Yup.string()
      .min(8, "password minimum length should be 8")
      .required("required"),
  });

  return (
    <div className="log_reg_form  addv">
      <div className="signin-hidden-sbar">
        <div className="hsidebar-header">
          <h3 className="title fw-bold">ADD New Visitor</h3>
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
                    <div className="d-flex ">
                      <div>
                        <div className="mb-2 mr-sm-2 col-6">
                          <label className="form-label  mt-3 mb-3">
                            First Name:
                          </label>

                          <Field
                            type="text"
                            className="form-control"
                            placeholder="enter visitors name"
                            name="firstname"
                            value={props.values.firstname}
                            onChange={props.handleChange}
                          />
                          <p className="text-danger">
                            {<ErrorMessage name="firstname" />}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 mr-sm-2 col-6">
                          <label className="form-label mt-3 mb-3">
                            Last Name:
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            placeholder="Enter  visitor lastname"
                            name="email"
                            value={props.values.email}
                            onChange={props.handleChange}
                          />
                          <p className="text-danger">
                            {<ErrorMessage name="lastname" />}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-2 mr-sm-2 col-6">
                      <label className="form-label mt-3 mb-3">
                        Visitors address:
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Ateba Ryan"
                        name="adress"
                        value={props.values.adress}
                        onChange={props.handleChange}
                      />
                      <p className="text-danger">
                        {<ErrorMessage name="adress" />}
                      </p>
                    </div>
                    <div className="form-group mb-3 ">
                      <label className="form-label">Visistors email:</label>
                      <Field
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={props.values.email}
                        onChange={props.handleChange}
                      />
                      <p className="text-danger">
                        {<ErrorMessage name="email" />}
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
                      Add
                    </button>
                    <button
                      onClick={() => navigate("/admindashboard")}
                      className="btn btn-log btn-thm mt20 bg-danger"
                    >
                      Go Back
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVisitor;
