import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import TableDash from "../../components/TableDash";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./styles.css";
import _ from "lodash";
import Pagination from "../../components/Pagination";
const pageSize = 10;
function VisitorsPage() {
  const [data, setData] = useState([]);
  const [paginatedData, setPaginatedData] = useState();
  const [current, setCurrent] = useState();

  const Paginations = (pageN) => {
    setCurrent(pageN);
    const startindex = pageN - 1;
    const PaginatedDatas = _(data).slice(startindex).take(pageSize).value();
    //_ a put
    setPaginatedData(PaginatedDatas);
  };

  const navigate = useNavigate();

  const { datas } = useAxiosFetch(`http://localhost:3006/blogs`);

  useEffect(() => {
    setData(datas);
    setPaginatedData(_(datas).slice(0).take(pageSize).value());
    //_a put
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
                    <p class="para">Here is the lit of visitors</p>
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
                              placeholder="Search Visitor"
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

                      <div class="col-lg-4">
                        <div class="dashboard_page_add_listing text-center text-lg-end mb30 mb15-520">
                          <a
                            href="/addvisitor"
                            class="btn btn-order btn-lg btn-thm"
                          >
                            Add visitor
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="order_table table-responsive">
                      <table class="table">
                        <thead class="table-light">
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>

                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paginatedData?.map((dataT) => (
                            <tr>
                              <th scope="row">{dataT.id}</th>
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
                          {/* <tr> */}
                          {/* <th scope="row">#1923</th>
                            <td>Lenovo IdeaPad 3 15.6" Laptop - Sand</td>
                            <td>jfjjf</td>
                            <td>
                              <span>Aug 15, 2022</span>
                            </td>
                            <td>Paid</td>

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
                            </td> */}
                          {/* </tr> */}
                        </tbody>
                      </table>
                    </div>
                    {/* <div class="mbp_pagination mt30 text-center">
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
                    </div> */}
                    <Pagination
                      pageSize={pageSize}
                      Paginations={Paginations}
                      data={paginatedData}
                      current={current}
                    />
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
