import React from "react";
import profile from "../assets/images/setting-profile.png";
import camera from "../assets/images/img_upload.png";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/instagram.png";
import google from "../assets/icon/google.png";
import twitter from "../assets/icon/twitter.png";
import linkedIn from "../assets/icon/linkedin.png";
import sms from "../assets/images/majesticons_mail.png";
import location from "../assets/images/typcn_location.png";
import mobile from "../assets/images/prime_mobile.png";
import whatsapp from "../assets/images/mdi_whatsapp.png";
import file from "../assets/images/basil_file-outline.png";
import eye from "../assets/images/password_eye.png";
import visa from "../assets/images/visa.png";
import stripe from "../assets/images/strip.png";
import paypal from "../assets/images/payple.png";
import masterCard from "../assets/images/masterCard.png";
import gpay from "../assets/images/gpay.png";
import Title from "../components/utils/Title";
import Header from "../components/utils/Header";

const Settings = () => {
  return (
    <div>
      <Header />
      <Title>Profile</Title>
      <div className="lens_ordering w-100">
        <div className="row g-3">
          <div className="col-12 col-lg-4">
            {/* <!-- Image Box Start --> */}
            <div className="profile_box mb-3" style={{ padding: "40px" }}>
              <div className="img__box">
                <img className="img-fluid" src={profile} alt="Profile Image" />
                <label htmlFor="file-input">
                  <img className="img-fluid" src={camera} alt="" />
                </label>
                <input id="file-input" type="file" />
              </div>
              <h3>Jacob Cortnel</h3>
              <div className="d-flex justify-content-center gap-4">
                <a href="#">
                  <img className="img-fluid" src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img className="img-fluid" src={instagram} alt="Instagram" />
                </a>
                <a href="#">
                  <img className="img-fluid" src={google} alt="Google" />
                </a>
                <a href="#">
                  <img className="img-fluid" src={twitter} alt="Twitter" />
                </a>
                <a href="#">
                  <img className="img-fluid" src={linkedIn} alt="LinkedIn" />
                </a>
              </div>
            </div>
            {/* <!-- Image Box End --> */}

            {/* <!-- Address Box Start --> */}
            <div className="profile_box address">
              <div className="d-flex gap-3 mb-4">
                <a href="#">
                  <img className="img-fluid" src={sms} alt="LinkedIn" />
                </a>
                <p>Agpor@something.com</p>
              </div>
              <div className="d-flex gap-3 mb-4">
                <a href="#">
                  <img className="img-fluid" src={location} alt="LinkedIn" />
                </a>
                <p>312.5 East Lamberg, Coastal line RdAlabama</p>
              </div>
              <div className="d-flex gap-3 mb-4">
                <a href="#">
                  <img className="img-fluid" src={mobile} alt="LinkedIn" />
                </a>
                <p>+11(023)59983</p>
              </div>
              <div className="d-flex gap-3 mb-4">
                <a href="#">
                  <img className="img-fluid" src={mobile} alt="LinkedIn" />
                </a>
                <p>+11(023)59983</p>
              </div>
              <div className="d-flex gap-3 mb-4">
                <a href="#">
                  <img className="img-fluid" src={whatsapp} alt="LinkedIn" />
                </a>
                <p>+11(023)59983</p>
              </div>
              <div className="d-flex gap-3 mb-4">
                <a href="#">
                  <img className="img-fluid" src={file} alt="LinkedIn" />
                </a>
                <p>Personal information file</p>
              </div>
            </div>
            {/* <!-- Address Box End --> */}
          </div>

          {/* <!-- Profile Details Start --> */}
          <div className="col-12 col-lg-8">
            <div className="lens_order_box" style={{ padding: "22px 42pxs" }}>
              <h2 className="mb-3">My Profile Details</h2>
              <form style={{ marginBottom: "39px" }}>
                <div className="d-flex flex-wrap gap-4">
                  <div className="mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jacob"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cortnel"
                    />
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-4">
                  <div className="mb-3">
                    <label>Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="USA"
                    />
                  </div>
                  <div className="mb-3">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Newyork"
                    />
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-4">
                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Agpor@something.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+11(023)59983"
                    />
                  </div>
                </div>

                <div
                  className="d-flex flex-wrap  align-items-center change_password"
                  style={{ marginBottom: "30px" }}
                >
                  <div className="mb-0 ">
                    <label>Password</label>
                    <div className="d-flex align-items-center">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="***********"
                      />
                      <img className="img-fluid" src={eye} alt="" />
                    </div>
                  </div>
                  <p></p>
                  <span>Change Password</span>
                </div>
                <button type="submit">Update Information</button>
              </form>
              <h2>Add Payment methods</h2>
              <div className="d-flex card_link" style={{ gap: "20px" }}>
                <a href="" target="_blank">
                  <img className="img-fluid" src={visa} alt="" />
                </a>
                <a href="" target="_blank">
                  <img className="img-fluid" src={stripe} alt="" />
                </a>
                <a href="" target="_blank">
                  <img className="img-fluid" src={paypal} alt="" />
                </a>
                <a href="" target="_blank">
                  <img className="img-fluid" src={masterCard} alt="" />
                </a>
                <a href="" target="_blank">
                  <img className="img-fluid" src={gpay} alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Profile Details End--> */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
