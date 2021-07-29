import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import { API } from "../../../../API";
import { isAutheticated } from "../../../auth/authhelper";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../../Footer";
import { useRef } from "react";
function AddCatagory(props) {
  const [inputText, setinputText] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const optionRef = useRef();
  //let history=useHistory();
  const [loading, setLoading] = useState(false);

  const { token } = isAutheticated();

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(`${API}/api/category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCategory(res.data);
    }

    fetchData();
  }, []);

  console.log(category);
  function getCategoryId(e) {
    let index = e.target.selectedIndex;
    let optionElement = e.target.childNodes[index];
    let optionId = optionElement.getAttribute("id");
    setCategoryId(optionId);
  }
  const handleInputText = (e) => {
    console.log(e.target.value);
    setinputText(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res;
    if (categoryId) {
      res = await axios.post(
        `${API}/api/category/`,
        {
          category: inputText,
          parentId: categoryId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data) {
        window.location = "/comsubcatagory";
      }
    } else {
      res = await axios.post(
        `${API}/api/category/`,
        {
          category: inputText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data) {
        window.location = "/comcatagory";
      }
    }

    //     axios
    //   .post(`${API}/api/category/`, {category: inputText}, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((response) => {
    //     setLoading(false);
    //     swal( {
    //       title: "Category added Successfully!",

    //       icon: "success",
    //       buttons: true,
    //       successMode: true,
    //       dangerMode: false,
    //     }).then((value) => {
    //         history.push("/comcatagory");
    //     });
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     let message = "errror";
    //     swal({
    //       title: "Error",
    //       text: { message },
    //       icon: "error",
    //       buttons: true,
    //       dangerMode: true,
    //     });
    //     console.log(err);
    //   });
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
                    <li className="breadcrumb-item">
                      {props.breadcrumbheading
                        ? props.breadcrumbheading
                        : "Commerce - Categories"}
                    </li>
                    <li className="breadcrumb-item">Add New</li>
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
                  <div className="row">
                    <div className="col-md-12 col-lg-6 col-xl-6">
                      <h1 className="text-left head-small">
                        {props.subheading
                          ? props.subheading
                          : "Add New Category"}{" "}
                      </h1>

                      <form>
                        {props.labelTwo ? (
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  {props.labelTwo}
                                </label>
                                <select
                                  name="category"
                                  className="form-control  input-field"
                                  onChange={(e) => getCategoryId(e)}
                                >
                                  <option>--select--</option>
                                  {category.map((item, index) => {
                                    return (
                                      <option key={index} id={item._id}>
                                        {item.category}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                          </div>
                        ) : null}
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label
                                for="basicpill-phoneno-input"
                                className="label-100"
                              >
                                {props.labelOne
                                  ? props.labelOne
                                  : "Enter Category Name"}
                              </label>
                              <input
                                type="text"
                                onChange={handleInputText}
                                className="form-control input-field"
                                id="basicpill-phoneno-input"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group text-left">
                              <button
                                onClick={submitHandler}
                                type="button"
                                className="btn btn-success btn-login waves-effect waves-light mr-3"
                              >
                                <ClipLoader loading={loading} size={18} />
                                {!loading && "Save"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
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
                            <script>document.write(new Date().getFullYear())</script> © SHOTT.
                        </div>

                    </div>
                </div>
            </footer> */}
      <Footer />
    </div>
  );
}

export default AddCatagory;
