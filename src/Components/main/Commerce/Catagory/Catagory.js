import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../../API";
import { isAutheticated } from "../../../auth/authhelper";
import Footer from "../../Footer";
import { MdDelete, MdEdit } from "react-icons/md";

function Catagory(props) {
  const { token } = isAutheticated();
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(`${API}/api/category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res, "res");
      console.log(res.data);
      setdata(res.data);
    }
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    let status = window.confirm("Do you want to delete");
    if (!status) {
      return;
    }
    let res = await axios.delete(`${API}/api/category/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      window.location.reload();
    }
  };

  const deleteSubcategory = async (subCatId) => {
    let status = window.confirm("Do you want to delete");
    if (!status) {
      return;
    }
    let res = await axios.delete(`${API}/api/category/${subCatId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      window.location.reload();
    }
  };
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* <!-- start page title --> */}

          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0">
                  {props.heading ? props.heading : "Commerce - Categories"}
                </h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">Potions of Paradise</Link>
                    </li>
                    <li className="breadcrumb-item">{props.heading}</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- end page title --> */}

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row ml-0 mr-0  mb-10">
                    <div className="col-sm-12 col-md-6">&nbsp;</div>
                    <div className="col-sm-12 col-md-6">
                      <div className="dropdown d-block">
                        <a
                          href={
                            props.addNewUrl
                              ? props.addNewUrl
                              : "/comcatagory/add"
                          }
                        >
                          <button
                            type="button"
                            className="btn btn-primary add-btn waves-effect waves-light float-right"
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                            Add New
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive table-shoot">
                    <table className="table table-centered table-nowrap mb-0">
                      <thead className="thead-light">
                        <tr>
                          <th>Category Name</th>
                          {props.tableHeading ? (
                            <th>{props.tableHeading}</th>
                          ) : null}
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.length > 0
                          ? data.map((item) => (
                              <tr key={item._id}>
                                <td>{item.category}</td>
                                {props.tableHeading ? (
                                  <td>
                                    {item.subCategory.map((subcat, index) => {
                                      return (
                                        <tr
                                          style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                          }}
                                          key={index}
                                        >
                                          {subcat.category}
                                        </tr>
                                      );
                                    })}
                                  </td>
                                ) : null}
                                {props.tableHeading ? (
                                  <td>
                                    {item.subCategory.map((subcat, index) => {
                                      return (
                                        <div className="d-flex" key={index}>
                                          <MdDelete
                                            className="mt-1 mr-3 text-danger h4"
                                            onClick={() =>
                                              deleteSubcategory(subcat._id)
                                            }
                                          />
                                          <Link
                                            to={`/comsubcatagory/edit/${subcat._id}`}
                                          >
                                            <MdEdit className="mt-1 text-primary h4 cursor-pointer" />
                                          </Link>
                                        </div>
                                      );
                                    })}
                                  </td>
                                ) : (
                                  <td>
                                    <Link to={`/comcatagory/edit/${item._id}`}>
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-sm  waves-effect waves-light btn-table ml-2"
                                      >
                                        Edit
                                      </button>
                                    </Link>

                                    <button
                                      onClick={() => handleDelete(item._id)}
                                      type="button"
                                      className="btn btn-danger btn-sm  waves-effect waves-light btn-table ml-2"
                                      id="sa-params"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                )}
                              </tr>
                            ))
                          : ""}
                      </tbody>
                    </table>
                  </div>

                  {/* <!-- end table-responsive --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- container-fluid --> */}
      </div>
      {/* <!-- End Page-content --> */}

      {/* <footer className="footer">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12">
							<script>document.write(new Date().getFullYear())</script> © TellyTell
						</div>

					</div>
				</div>
			</footer> */}
      <Footer />
    </div>
  );
}

export default Catagory;
