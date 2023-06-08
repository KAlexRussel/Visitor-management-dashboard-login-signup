import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
// import TableDash from "../../components/TableDash";
import Charts from "../../components/Charts";
import DatatablePage from "../../components/TableDash";

function Dashboard() {
  const [graphShow, setGraphShow] = useState();
  useEffect((data) => {
    if ((data = 1)) {
      setGraphShow(data);
    }
  }, []);

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
                      <div className="subtitle1">Total Earnings</div>
                      <div className="title">
                        $859.25k
                        <span className="badge style1 text-center">
                          <img
                            className="pr5"
                            src="images/resource/chart-up.png"
                            alt="chart-up"
                          />
                          2.2%
                        </span>
                      </div>
                      <div className="subtitle2">
                        <span>$50</span> New Sales
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
                      <div className="subtitle1">Order</div>
                      <div className="title">66,894</div>
                      <div className="subtitle2">
                        <span>40+</span> New Order
                      </div>
                    </div>
                    <div className="icon text-center mt-4">
                      <i className="flaticon-sent"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xxl-3">
                  <div className="d-flex justify-content-between statistics_funfact">
                    <div className="details">
                      <div className="subtitle1">Customer</div>
                      <div className="title">583.35M</div>
                      <div className="subtitle2">
                        <span>90+</span> New Customer
                      </div>
                    </div>
                    <div className="icon text-center mt-4">
                      <i className="flaticon-customer"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xxl-3">
                  <div className="d-flex justify-content-between statistics_funfact">
                    <div className="details">
                      <div className="subtitle1">My Balance</div>
                      <div className="title">
                        $365.89k
                        <span className="badge style2 text-center">
                          <img
                            className="pr5"
                            src="images/resource/chart-down.png"
                            alt="chart-up"
                          />
                          2.2%
                        </span>
                      </div>
                      <div className="subtitle2">
                        <span>290</span> Balance
                      </div>
                    </div>
                    <div className="icon text-center mt-4">
                      <i className="flaticon-wallet"></i>
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
                        <li className="list-inline-item report_export">
                          <select className="selectpicker show-tick">
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
          </div>
        </div>
        <DatatablePage />
        <div>
          <div className="row">
            <div className="col-xl-8">
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
                        </tr>
                      </thead>
                      <tbody>
                        {/* {datas.map((data)=>(
                          <tr>
                          <th scope="row">{data.id}</th>
                          <td>{data.purpose}</td>
                          <td>{data.date}</td>
                          <td>{data.departuredate}</td>
                          <td>
                            {data.visitor}
                          </td>
                          
                        </tr>

                        ))} */}
                        <tr>
                          <th scope="row">1</th>
                          <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                          <td>Aug 15, 2020</td>
                          <td>Paid</td>
                          <td>Delivered</td>
                          <td>$56.00</td>
                          <td className="action">
                            <span className="details">...</span>
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

      {/* sdashboard */}
    </div>
  );
}

export default Dashboard;
