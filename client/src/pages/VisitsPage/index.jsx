import React from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import TableDash from "../../components/TableDash";

const VisitsPage = () => {
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
                    <h2>Visits</h2>
                    <p className="para">visits</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="dashboard_product_list account_user_deails">
                    <div className="row d-block d-sm-flex justify-content-center justify-content-sm-between">
                      <div className="col-sm-6 col-lg-3">
                        <div className="dashboard_page header_search_widget mb30 mb15-520">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search product"
                              aria-label="Recipient's username"
                            />
                            <div className="input-group-append">
                              <button className="btn" type="button">
                                <span className="fa fa-search"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="dashboard_page sidebar_location_filter mb30 mb5-520">
                          <div className="form-group">
                            <div className="checkout_country_form actegory">
                              <select className="selectpicker show-tick">
                                <option>Select Category</option>
                                <option value="Computers">Computers</option>
                                <option value="Technologies">
                                  Technologies
                                </option>
                                <option value="electronic">electronic</option>
                                <option value="Home&Kitchen">
                                  Home & Kitchen
                                </option>
                                <option value="Clothing&Accessories">
                                  Clothing & Accessories
                                </option>
                                <option value="Babies&Moms">
                                  Babies & Moms
                                </option>
                                <option value="Health&Beauty">
                                  Health & Beauty
                                </option>
                                0
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="dashboard_page sidebar_location_filter mb30 mb5-520">
                          <div className="form-group">
                            <div className="checkout_country_form">
                              <select className="selectpicker show-tick">
                                <option>Status</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancel">Cancel</option>
                                <option value="InProgress">In Progress</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="dashboard_page_add_listing text-center text-lg-end mb30 mb15-520 d-grid">
                          <a
                            href="/addvisits"
                            className="btn btn-new btn-lg btn-thm"
                          >
                            Add New Visits
                          </a>
                        </div>
                      </div>
                    </div>
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
                            <th scope="row">#1923</th>
                            <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                            <td>AB123456789-1</td>
                            <td className="status">
                              <span className="style4">Stock</span>
                            </td>
                            <td>$250</td>
                            <td>Computers, Technologies, electronic</td>
                            <td className="action">
                              <span>Aug 15, 2022</span>
                            </td>
                            <td className="editing_list align-middle">
                              <ul>
                                <li className="list-inline-item mb-1">
                                  <a
                                    href="#"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Edit"
                                    data-bs-original-title="View"
                                    aria-label="View"
                                  >
                                    <span className="flaticon-pencil"></span>
                                  </a>
                                </li>
                                <li className="list-inline-item mb-1">
                                  <a
                                    href="#"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Delete"
                                    data-bs-original-title="Edit"
                                    aria-label="Edit"
                                  >
                                    <span className="flaticon-delete"></span>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mbp_pagination mt30 text-center">
                      <ul className="page_navigation">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                          >
                            <span className="fas fa-angle-left"></span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <a className="page-link" href="#">
                            2 <span className="sr-only">(current)</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            5
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            ...
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            20
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <span className="fas fa-angle-right"></span>
                          </a>
                        </li>
                      </ul>
                      <p className="mt20 pagination_page_count text-center">
                        1 – 20 of 300+ properties found
                      </p>
                    </div>
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
};

export default VisitsPage;
