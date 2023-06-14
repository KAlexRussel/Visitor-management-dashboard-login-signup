import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
// import TableDash from "../../components/TableDash";
import Charts from "../../components/Charts";
import DatatablePage from "../../components/TableDash";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Dashboard() {
  const [graphShow, setGraphShow] = useState();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const { datas } = useAxiosFetch(`http://localhost:3006/blogs`);

  useEffect(() => {
    setData(datas);
  }, [datas]);

  const handleDelete = async (id) => {
    if (window.confirm("do you really want to delete this blog?")) {
      const response = await axios.delete(`http://localhost:3006/blogs/${id}`);
      if (response.status === 200) {
        toast.success("blog deleted succesfully");
        // LoadBlogsData();
        setData(datas);
      } else {
        toast.error("something when wrong");
      }
    }
  };
  // useEffect((data) => {
  //   if ((data = 1)) {
  //     setGraphShow(data);
  //   }
  // }, []);

  return (
    <div>
      <TopBar />
      <div>
        <SideBar />
        <div>
          <div className="dashboard__main pl0-md">
            <div className="dashboard__content bgc-gmart-gray">
              <div className="row pb50">
                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Dashboard</h2>
                    <p className="para">The visitors</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-xxl-3">
                  <div className="d-flex justify-content-between statistics_funfact">
                    <div className="details">
                      <div className="subtitle1">Total Visit</div>
                      <div className="title">
                        total visit
                        {/* <span className="badge style1 text-center">
                          <img
                            className="pr5"
                            src="images/resource/chart-up.png"
                            alt="chart-up"
                          />
                          2.2% *
  </span>*/}
                      </div>
                    </div>
                    <div className="icon text-center mt-4">
                      <i className="flaticon-money-bag"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xxl-3">
                  <div className="d-flex justify-content-between statistics_funfact">
                    <div className="details">
                      <div className="subtitle1">Number of visitors</div>
                      <div className="title"></div>
                      <div className="subtitle2">
                        <span>40+</span>
                      </div>
                    </div>
                    <div className="icon text-center mt-4">
                      <i className="flaticon-sent"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="application_statics mb30">
                    <div className="report_widget d-block d-sm-flex justify-content-center justify-content-sm-between">
                      <h4 className="title pl30">Earning Statistics</h4>
                      <ul className="mb0 ml30-520">
                        <li className="list-inline-item report_export mb15-520">
                          <a href="#">Export Report</a>
                        </li>
                        <li className=" list-inline-item report_export">
                          <select className="selectpicker form-control show-tick">
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                            <option value="year">This Year</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                    {/* <canvas id="myChartweave" style={{ height: 230 }}></canvas> */}
                    <Charts />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="application_statics">
                    <h4 className="title pl30 mb30">Recent Visit</h4>
                    <div className="account_user_deails dashboard_page">
                      <div className="order_table table-responsive">
                        <table className="table">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Purpose</th>
                              <th scope="col">Date</th>
                              <th scope="col">Departure Date</th>
                              <th scope="col">Visitor</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((dataT, index) => (
                              <tr>
                                <th scope="row" key={index}>
                                  {dataT.id}
                                </th>
                                <td>{dataT.purpose}</td>
                                <td>{dataT.date}</td>
                                <td>{dataT.departuredate}</td>
                                <td>{dataT.visitor}</td>
                                <td class="editing_list align-middle">
                                  <ul>
                                    <li class="list-inline-item mb-1">
                                      <a
                                        href="/addvisitor"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Edit"
                                        data-bs-original-title="View"
                                        aria-label="View"
                                      >
                                        <span class="flaticon-pencil"></span>
                                      </a>
                                    </li>
                                    <li
                                      onClick={handleDelete}
                                      class="list-inline-item mb-1"
                                    >
                                      <a
                                        href="#"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Delete"
                                        data-bs-original-title="Edit"
                                        aria-label="Edit"
                                      >
                                        <span class="flaticon-delete"></span>
                                      </a>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            ))}
                            <tr>
                              <th scope="row">1</th>
                              <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                              <td>Aug 15, 2020</td>
                              <td>Paid</td>
                              <td>Delivered</td>

                              <td class="editing_list align-middle">
                                <ul>
                                  <li class="list-inline-item mb-1">
                                    <a
                                      href="#"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                      data-bs-original-title="View"
                                      aria-label="View"
                                    >
                                      <span class="flaticon-pencil"></span>
                                    </a>
                                  </li>
                                  <li class="list-inline-item mb-1">
                                    <a
                                      href="#"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                      data-bs-original-title="Edit"
                                      aria-label="Edit"
                                    >
                                      <span class="flaticon-delete "></span>
                                    </a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <DatatablePage /> */}
      </div>

      {/* sdashboard */}
    </div>
  );
}

export default Dashboard;
