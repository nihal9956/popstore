import React from "react";
import { Link } from "react-router-dom";

function ViewClient() {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* <!-- start page title --> */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0">Customer Information</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">Potions of Paradise</Link>
                    </li>
                    <li className="breadcrumb-item active">Customer</li>
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
                  <div className="col-sm-12 col-md-6 ml-auto mb-5">
                    <div className="dropdown d-block">
                      <a href="/clients">
                        <button
                          type="button"
                          className="btn btn-login text-white add-btn waves-effect waves-light float-right"
                        >
                          Back
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="table-responsive table-shoot">
                    <table className="table">
                      <tr>
                        <th>First Name</th>
                        <td>Nadeem</td>
                      </tr>
                      <tr>
                        <th>Last Name</th>
                        <td>Khan</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>nadeemKhan29@gmail.com</td>
                      </tr>
                      <tr>
                        <th>Mobile </th>
                        <td>9838102838</td>
                      </tr>
                      <tr>
                        <th>Joined On</th>
                        <td>18 Oct 2021</td>
                      </tr>
                      <tr>
                        <th>Unique Client ID</th>
                        <td>9838102838</td>
                      </tr>
                      <tr>
                        <th>Orders</th>
                        <td>20</td>
                      </tr>
                      <tr>
                        <th>Address1</th>
                        <td>
                          House No, Street Name, City Name, State, Country,
                          Pincode
                        </td>
                      </tr>
                      <tr>
                        <th>Address2</th>
                        <td>
                          House No, Street Name, City Name, State, Country,
                          Pincode
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewClient;
