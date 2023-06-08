import React from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import TableDash from "../../components/TableDash";
import "./styles.css";

function VisitorsPage() {
  return (
    <div>
      <TopBar />
      <div>
        <SideBar />
        <div>
          <div class="dashboard__main pl0-md">
            <div class="dashboard__content bgc-gmart-gray">
              <div class="row pb50">
                <div class="col-lg-12">
                  <div class="dashboard_title_area">
                    <h2>Visitors</h2>
                    <p class="para">Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12">
                  <div class="dashboard_product_list account_user_deails">
                    <div class="row d-block d-sm-flex justify-content-center justify-content-sm-between">
                      <div class="col-sm-6 col-lg-4">
                        <div class="dashboard_page header_search_widget mb30 mb15-520">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search order"
                              aria-label="Recipient's username"
                            />
                            <div class="input-group-append">
                              <button class="btn" type="button">
                                <span class="fa fa-search"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-lg-4">
                        <div class="dashboard_page sidebar_location_filter mb30 mb5-520">
                          <div class="form-group">
                            <div class="checkout_country_form">
                              <select class="selectpicker show-tick">
                                <option>Status</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancel">Cancel</option>
                                <option value="InProgress">In Progress</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="dashboard_page_add_listing text-center text-lg-end mb30 mb15-520">
                          <a href="#" class="btn btn-gray">
                            Export
                          </a>
                          <a href="#" class="btn btn-order btn-lg btn-thm">
                            New Order
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="order_table table-responsive">
                      <table class="table">
                        <thead class="table-light">
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col"></th>
                            <th scope="col">Date</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Status</th>
                            <th scope="col">Total</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">#1923</th>
                            <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                            <td></td>
                            <td class="action">
                              <span>Aug 15, 2022</span>
                            </td>
                            <td>Paid</td>
                            <td class="status">
                              <span class="style1">Delivered</span>
                            </td>
                            <td>$56.00</td>
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
                                    <span class="flaticon-delete"></span>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#1923</th>
                            <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                            <td></td>
                            <td class="action">
                              <span>Aug 15, 2022</span>
                            </td>
                            <td>Paid</td>
                            <td class="status">
                              <span class="style2">Cancel</span>
                            </td>
                            <td>$56.00</td>
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
                                    <span class="flaticon-delete"></span>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#1923</th>
                            <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                            <td></td>
                            <td class="action">
                              <span>Aug 15, 2022</span>
                            </td>
                            <td>Paid</td>
                            <td class="status">
                              <span class="style3">In Progress</span>
                            </td>
                            <td>$56.00</td>
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
                                    <span class="flaticon-delete"></span>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#1923</th>
                            <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                            <td></td>
                            <td class="action">
                              <span>Aug 15, 2022</span>
                            </td>
                            <td>Paid</td>
                            <td class="status">
                              <span class="style1">Delivered</span>
                            </td>
                            <td>$56.00</td>
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
                                    <span class="flaticon-delete"></span>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#1923</th>
                            <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                            <td></td>
                            <td class="action">
                              <span>Aug 15, 2022</span>
                            </td>
                            <td>Paid</td>
                            <td class="status">
                              <span class="style1">Delivered</span>
                            </td>
                            <td>$56.00</td>
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
                                    <span class="flaticon-delete"></span>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#1923</th>
                            <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                            <td></td>
                            <td class="action">
                              <span>Aug 15, 2022</span>
                            </td>
                            <td>Paid</td>
                            <td class="status">
                              <span class="style3">In Progress</span>
                            </td>
                            <td>$56.00</td>
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
                                    <span class="flaticon-delete"></span>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#1923</th>
                            <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                            <td></td>
                            <td class="action">
                              <span>Aug 15, 2022</span>
                            </td>
                            <td>Paid</td>
                            <td class="status">
                              <span class="style1">Delivered</span>
                            </td>
                            <td>$56.00</td>
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
                                    <span class="flaticon-delete"></span>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">#1923</th>
                            <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                            <td></td>
                            <td class="action">
                              <span>Aug 15, 2022</span>
                            </td>
                            <td>Paid</td>
                            <td class="status">
                              <span class="style1">Delivered</span>
                            </td>
                            <td>$56.00</td>
                            <td class="editing_list align-middle bb1">
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
                                    <span class="flaticon-delete"></span>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="mbp_pagination mt30 text-center">
                      <ul class="page_navigation">
                        <li class="page-item">
                          <a
                            class="page-link"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                          >
                            {" "}
                            <span class="fas fa-angle-left"></span>
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item active" aria-current="page">
                          <a class="page-link" href="#">
                            2 <span class="sr-only">(current)</span>
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            5
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            ...
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            20
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            <span class="fas fa-angle-right"></span>
                          </a>
                        </li>
                      </ul>
                      <p class="mt20 pagination_page_count text-center">
                        1 – 20 of 300+ properties found
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div>
        </div>  */}
      </div>
      {/* sdashboard */}
    </div>
  );
}

export default VisitorsPage;
