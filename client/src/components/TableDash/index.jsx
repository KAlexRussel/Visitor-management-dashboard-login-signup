import React from "react";

function TableDash() {
  return (
    <div>
      <div className="row">
        <div className="col-xl-8">
          <div className="application_statics">
            <h4 className="title pl30 mb30">Recent Orders</h4>
            <div className="account_user_deails dashboard_page">
              <div className="order_table table-responsive">
                <table className="table">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Product</th>
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
                      <td>Aug 15, 2020</td>
                      <td>Paid</td>
                      <td className="status">
                        <span className="style1">Delivered</span>
                      </td>
                      <td>$56.00</td>
                      <td className="action">
                        <span className="details">...</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">#1923</th>
                      <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                      <td>Aug 15, 2020</td>
                      <td>Paid</td>
                      <td className="status">
                        <span className="style2">Cancel</span>
                      </td>
                      <td>$56.00</td>
                      <td className="action">
                        <span className="details">...</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">#1923</th>
                      <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                      <td>Aug 15, 2020</td>
                      <td>Paid</td>
                      <td className="status">
                        <span className="style3">In Progress</span>
                      </td>
                      <td>$56.00</td>
                      <td className="action">
                        <span className="details">...</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">#1923</th>
                      <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                      <td>Aug 15, 2020</td>
                      <td>Paid</td>
                      <td className="status">
                        <span className="style1">Delivered</span>
                      </td>
                      <td>$56.00</td>
                      <td className="action">
                        <span className="details">...</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">#1923</th>
                      <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                      <td>Aug 15, 2020</td>
                      <td>Paid</td>
                      <td className="status">
                        <span className="style2">Cancel</span>
                      </td>
                      <td>$56.00</td>
                      <td className="action">
                        <span className="details">...</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">#1923</th>
                      <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                      <td>Aug 15, 2020</td>
                      <td>Paid</td>
                      <td className="status">
                        <span className="style3">In Progress</span>
                      </td>
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
        <div className="col-xl-4">
          <div className="recent_activity_widget">
            <h4 className="title mb25">Recent Activity</h4>
            <div className="dashboard-timeline-label">
              <div className="timeline-item pb10">
                {/* <!--begin::Label--> */}
                <div className="child-timeline-label">08:42</div>
                {/* <!--end::Label-->
          <!--begin::Badge--> */}
                <div className="timeline-badge">
                  <i className="fa fa-genderless"></i>
                </div>
                {/* <!--end::Badge-->
          <!--begin::Text--> */}
                <div className="ra_pcontent pl10">
                  <span className="title">Purchase by Ali Price</span> <br />{" "}
                  <span className="subtitle">
                    Product noise evolve smartwatch
                  </span>
                </div>
                {/* <!--end::Text--> */}
              </div>
            </div>
            <div className="dashboard-timeline-label">
              <div className="timeline-item pb10">
                {/* <!--begin::Label--> */}
                <div className="child-timeline-label">10:00</div>
                {/* <!--end::Label-->
          <!--begin::Badge--> */}
                <div className="timeline-badge color2">
                  <i className="fa fa-genderless"></i>
                </div>
                {/* <!--end::Badge-->
          <!--begin::Text--> */}
                <div className="ra_pcontent pl10">
                  <span className="title">Added new style collection</span>
                  <br />
                  <span className="subtitle mb10">By TFN Technologies</span>
                  <ul className="ra-img mb0 mt10">
                    <li className="list-inline-item">
                      <img src="images/resource/raimg1.png" alt="" />
                    </li>
                    <li className="list-inline-item">
                      <img src="images/resource/raimg2.png" alt="" />
                    </li>
                  </ul>
                </div>
                {/* <!--end::Text--> */}
              </div>
            </div>
            <div className="dashboard-timeline-label">
              <div className="timeline-item pb10">
                {/* <!--begin::Label--> */}
                <div className="child-timeline-label">14:37</div>
                {/* <!--end::Label-->
          <!--begin::Badge--> */}
                <div className="timeline-badge color3">
                  <i className="fa fa-genderless"></i>
                </div>
                {/* <!--end::Badge-->
          <!--begin::Text--> */}
                <div className="ra_pcontent pl10">
                  <span className="title">
                    Make deposit{" "}
                    <span className="text-thm1 fw500">USD 700</span> to TFN
                  </span>
                </div>
                {/* <!--end::Text--> */}
              </div>
            </div>
            <div className="dashboard-timeline-label">
              <div className="timeline-item pb10">
                {/* <!--begin::Label--> */}
                <div className="child-timeline-label">16:50</div>
                {/* <!--end::Label-->
          <!--begin::Badge--> */}
                <div className="timeline-badge color4">
                  <i className="fa fa-genderless"></i>
                </div>
                {/* <!--end::Badge-->
          <!--begin::Text--> */}
                <div className="ra_pcontent pl10">
                  <span className="title">
                    Natasha Carey have liked the products
                  </span>{" "}
                  <br />{" "}
                  <span className="subtitle">
                    Allow users to like products in your WooCommerce store.
                  </span>
                </div>
                {/* <!--end::Text--> */}
              </div>
            </div>
            <div className="dashboard-timeline-label">
              <div className="timeline-item pb10">
                {/* <!--begin::Label--> */}
                <div className="child-timeline-label">21:03</div>
                {/* <!--end::Label-->
          <!--begin::Badge--> */}
                <div className="timeline-badge color5">
                  <i className="fa fa-genderless"></i>
                </div>
                {/* <!--end::Badge-->
          <!--begin::Text--> */}
                <div className="ra_pcontent pl10">
                  <span className="title">Favoried Product</span> <br />{" "}
                  <span className="subtitle">
                    Esther James have favorited product.
                  </span>
                </div>
                {/* <!--end::Text--> */}
              </div>
            </div>
            <div className="dashboard-timeline-label">
              <div className="timeline-item">
                {/* <!--begin::Label--> */}
                <div className="child-timeline-label">23:07</div>
                {/* <!--end::Label-->
          <!--begin::Badge--> */}
                <div className="timeline-badge color6">
                  <i className="fa fa-genderless"></i>
                </div>
                {/* <!--end::Badge-->
          <!--begin::Text--> */}
                <div className="ra_pcontent pl10">
                  <span className="title">Today offers by Digitech Galaxy</span>{" "}
                  <br />{" "}
                  <span className="subtitle">
                    Offer is valid on orders of Rs.500 Or above for selected
                    products only.
                  </span>
                </div>
                {/* <!--end::Text--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableDash;
