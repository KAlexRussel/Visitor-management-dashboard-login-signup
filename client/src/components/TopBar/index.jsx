import React from "react";
import userimage from "../../assets/images/resource/user.png";

function TopBar() {
  return (
    <div>
      <header className="dashboard_header">
        <div className="header__container pt20 pb20 pl30 pr30">
          <div className="row justify-between items-center">
            <div className="col-sm-4 col-xl-2">
              <div className="text-center text-lg-start d-flex mb15-520">
                <div className="fz20 me-4">
                  <a
                    href="#"
                    className="dashboard_sidebar_toggle_icon text-thm1 vam"
                  >
                    <i className="fa-sharp fa-solid fa-bars-staggered"></i>
                  </a>
                </div>
                <div className="dashboard_header_logo">
                  <p className="logo">
                    Visitor app<span className="text-thm">.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xl-3 d-none d-md-block">
              <div className="header_search_widget mb15-520">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
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
            <div className="col-sm-5 col-xl-6 offset-xl-1 d-none d-md-block">
              <div className="text-center text-lg-end header_right_widgets">
                <ul className="mb0 d-flex justify-content-center justify-content-sm-end">
                  <li className="">
                    <a className="text-center" href="/">
                      <span className="flaticon-exit"></span>
                    </a>
                  </li>
                  <li className="">
                    <a className="text-center" href="#">
                      <span className="flaticon-mail-inbox-app"></span>
                    </a>
                  </li>
                  <li className="">
                    <a className="text-center" href="#">
                      <span className="flaticon-notification"></span>
                    </a>
                  </li>
                  <li className=" user_setting">
                    <div className="dropdown">
                      <a
                        className="btn dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <img src={userimage} alt="user.png" />
                      </a>
                      <div className="dropdown-menu">
                        <div className="user_setting_content">
                          <a
                            className="dropdown-item active"
                            href="page-dashboard.html"
                          >
                            <i className="flaticon-house mr10"></i>Dashboard
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-products.html"
                          >
                            <i className="flaticon-cash-on-delivery mr10"></i>
                            Products
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-order.html"
                          >
                            <i className="flaticon-checked-box mr10"></i>Order
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-customer.html"
                          >
                            <i className="flaticon-growth mr10"></i>Customer
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-categories.html"
                          >
                            <i className="flaticon-folder mr10"></i>Categories
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-message.html"
                          >
                            <i className="flaticon-mail-inbox-app mr10"></i>
                            Message
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-setting.html"
                          >
                            <i className="flaticon-settings mr10"></i>Settings
                          </a>
                          <a className="dropdown-item" href="page-login.html">
                            <i className="flaticon-exit mr10"></i>Logout
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default TopBar;
