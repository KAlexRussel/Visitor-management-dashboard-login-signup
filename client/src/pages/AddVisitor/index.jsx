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
    phonenumber: "",
  };

  const handleSubmit = (values, props) => {
    const data = {
      records: [
        {
          fields: {
            firstname: values.username,
            lastname: values.lastname,
            email: values.email,
            phonenumber: values.password,
            address: values.address,
          },
        },
      ],
    };
    const axiosConfig = {
      headers: {
        Authorization: "Bearer ",
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:8080/api/form", data, axiosConfig) // no try/catch here
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

    console.log(props);
    // actions.setSubmitting(false);

    // console.log(props);
    // console.log(props);
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().min(3, " minimum length  3").required("required"),
    lastname: Yup.string().min(3, "minimum length 3").required("required"),
    email: Yup.string().email("Invalid email").required("required"),
    phonenumber: Yup.number()
      .typeError("Invalid phone number")
      .required("required"),
    password: Yup.string()
      .min(8, "password minimum length should be 8")
      .required("required"),
  });

  return (
    <div className="log_reg_form  addv">
      <div className="signin-hidden-sbar">
        <div className="hsidebar-header">
          <h3 className="title fw-bold text-center">Add New Visitor</h3>
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
                    <div className=" row  ">
                      <div className="mb-2 mr-sm-2 col-6">
                        <label className="form-label  mt-3 mb-3">
                          Visitor First Name:
                        </label>

                        <Field
                          type="text"
                          className="form-control"
                          placeholder="enter visitors name"
                          name="firstname"
                          value={props.values.firstname}
                        />
                        <p className="text-danger">
                          {<ErrorMessage name="firstname" />}
                        </p>
                      </div>

                      <div className="mb-2 mr-sm-2 col-6">
                        <label className="form-label mt-3 mb-3">
                          Visitor Last Name:
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Enter  visitor lastname"
                          name="lastname"
                          value={props.values.email}
                        />
                        <p className="text-danger">
                          {<ErrorMessage name="lastname" />}
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="mb-2 mr-sm-2 col-6">
                        <label className="form-label mt-3 mb-3">
                          Visitors address:
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="visitors address"
                          name="adress"
                          value={props.values.address}
                        />
                        <p className="text-danger">
                          {<ErrorMessage name="address" />}
                        </p>
                      </div>
                      <div className="mb-2 mr-sm-2 col-6 ">
                        <label className="form-label mt-3 mb-3">
                          Visitors Phone Number:
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Enter phone number"
                          name="phonenumber"
                          value={props.values.phonenumber}
                        />
                        <p className="text-danger">
                          {<ErrorMessage name="phonenumber" />}
                        </p>
                      </div>
                    </div>

                    <div className="form-group mb-3 ">
                      <label className="form-label">Visitors email:</label>
                      <Field
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={props.values.email}
                      />
                      <p className="text-danger">
                        {<ErrorMessage name="email" />}
                      </p>
                    </div>

                    <div className="d-flex gap-1">
                      <button
                        type="submit"
                        className="btn btn-log btn-thm mt20"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => navigate("/admindashboard")}
                        className="btn btn-log btn-thm mt20 bg-danger"
                      >
                        Go Back
                      </button>
                    </div>
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
