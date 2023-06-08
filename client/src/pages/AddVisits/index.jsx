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

const AddVisits = () => {
  const navigate = useNavigate();
  const initialValues = {
    purpose: "",
    date: "",
    departuredate: "",
    visitor: "",
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
    purpose: Yup.string().required("required"),
    date: Yup.date().required("required"),
    departuredate: Yup.date().required("required"),
  });

  return (
    <div className="log_reg_form  addv">
      <div className="signin-hidden-sbar">
        <div className="hsidebar-header">
          <h3 className="title fw-bold text-center">Add New Visits</h3>
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
                          Purpose:
                        </label>

                        <Field
                          type="text"
                          className="form-control"
                          placeholder="purpose"
                          name="purpose"
                          value={props.values.purposee}
                          onChange={props.handleChange}
                        />
                        <p className="text-danger">
                          {<ErrorMessage name="purpose" />}
                        </p>
                      </div>

                      <div className="mb-2 mr-sm-2 col-6">
                        <label className="form-label mt-3 mb-3">Date:</label>
                        <Field
                          type="date"
                          className="form-control"
                          // placeholder="Enter  visitor lastname"
                          name="date"
                          value={props.values.date}
                          onChange={props.handleChange}
                        />
                        <p className="text-danger">
                          {<ErrorMessage name="date" />}
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="mb-2 mr-sm-2 col-6">
                        <label className="form-label mt-3 mb-3">
                          Departure Date:
                        </label>
                        <Field
                          type="date"
                          className="form-control"
                          // placeholder="Ateba Ryan"
                          name="date"
                          value={props.values.date}
                          onChange={props.handleChange}
                        />
                        <p className="text-danger">
                          {<ErrorMessage name="date" />}
                        </p>
                      </div>
                      <div className="mb-2 mr-sm-2 col-6 ">
                        <label className="form-label mt-3 mb-3">Visitor:</label>
                        <select
                          className="form-control"
                          name="phonenumber"
                          value={props.values.visitor}
                          onChange={props.handleChange}
                        >
                          <option value="visitors">will smith</option>
                          <option value="visitors">will smith</option>
                        </select>
                        <p className="text-danger">
                          {<ErrorMessage name="visitor" />}
                        </p>
                      </div>
                    </div>

                    {/* <div className="form-group mb-3 ">
                      <label className="form-label">Visitors email:</label>
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
                    </div> */}

                    <div className="d-flex gap-1">
                      <button
                        type="submit"
                        className="btn btn-log btn-thm mt20"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => navigate("/visitors")}
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

export default AddVisits;
