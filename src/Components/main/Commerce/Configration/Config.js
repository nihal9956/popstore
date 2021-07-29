import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import swal from "sweetalert";
import { isAutheticated } from "../../../auth/authhelper";
import { API } from "../../../../API";
import Footer from "../../Footer";

function Config(props) {
  const [gst, setGst] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [website, setWebsite] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [logo, setLogo] = useState("");
  const [loading, setLoading] = useState(false);

  const { token } = isAutheticated();

  async function handelChange(e) {
    if (e.target.files) {
      setLogo(e.target.files[0]);
    }
    if (props.postUrl === "gst") {
      setGst(e.target.value);
    }
    if (props.postUrl === "address") {
      if (e.target.name.toLowerCase() === "address") {
        setAddress(e.target.value);
      } else if (e.target.name.toLowerCase() === "company name") {
        setCompany(e.target.value);
      } else if (e.target.name.toLowerCase() === "city") {
        setCity(e.target.value);
      } else if (e.target.name.toLowerCase() === "state") {
        setState(e.target.value);
      } else if (e.target.name.toLowerCase() === "country") {
        setCountry(e.target.value);
      } else if (e.target.name.toLowerCase() === "pincode") {
        setPincode(e.target.name);
      } else if (e.target.name.toLowerCase() === "website") {
        setWebsite(e.target.name);
      } else if (e.target.name.toLowerCase() === "contact number") {
        setContact(e.target.value);
      } else if (e.target.name.toLowerCase() === "email") {
        setEmail(e.target.value);
      }
    }

    if (props.postUrl === "social") {
      if (e.target.name.toLowerCase() === "facebook") {
        setFacebook(e.target.value);
      } else if (e.target.name.toLowerCase() === "twitter") {
        setTwitter(e.target.value);
      } else if (e.target.name.toLowerCase() === "instagram") {
        setInstagram(e.target.value);
      } else if (e.target.name.toLowerCase() === "linkedin") {
        setLinkedin(e.target.value);
      }
    }
  }

  async function handelSubmit() {
    setLoading(true);
    let data;
    if (props.postUrl === "gst") {
      data = {
        gst,
      };
    }
    if (props.postUrl === "address") {
      data = {
        company,
        address,
        city,
        state,
        country,
        pincode,
        website,
        contact,
        email,
      };
    }
    if (props.postUrl === "social") {
      data = {
        facebook,
        twitter,
        instagram,
        linkedin,
      };
    }
    if (props.postUrl === "logo") {
      const formdata = new FormData();
      formdata.append("logo", logo);
      data = formdata;
    }

    let res = await axios.post(`${API}/api/config/${props.postUrl}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res) {
      setLoading(false);
      console.log(res);
      swal("Success!", res.data.message, res.data.status);
    }
  }
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* <!-- start page title --> */}

          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0">{props.heading}</h4>

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
                  <div className="row">
                    <div className="col-md-12 col-lg-6 col-xl-6">
                      <h1 className="text-left head-small">{props.heading} </h1>

                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              {props.labels.map((label) => {
                                return (
                                  <>
                                    <label
                                      for="basicpill-phoneno-input"
                                      className="label-100 mt-3"
                                    >
                                      {label}
                                    </label>
                                    <input
                                      type={props.type ? props.type : "text"}
                                      name={props.name ? props.name : label}
                                      onChange={(e) => handelChange(e)}
                                      className="form-control input-field "
                                      id="basicpill-phoneno-input"
                                    />
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group text-left">
                              <button
                                type="button"
                                onClick={handelSubmit}
                                className="btn btn-success btn-login waves-effect waves-light mr-3 pt-2 pb-2 pr-4 pl-4"
                              >
                                <ClipLoader loading={loading} size={18} />
                                {!loading && "Save"}
                              </button>
                              <button
                                onClick={() => setLoading(false)}
                                type="button"
                                className="btn btn-outline-secondary waves-effect waves-light mr-3 pt-2 pb-2 pr-4 pl-4"
                              >
                                Cancel
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

      <Footer />
    </div>
  );
}

export default Config;
