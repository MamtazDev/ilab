import React, { useState } from "react";
import Header from "../components/utils/Header";

const LensOrdering = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="lens_ordering w-100">
      <Header />

      {step === 0 && (
        <div className="row g-0">
          <div className="col-12 col-lg-5 p-0 pe-lg-2">
            {/* <!-- Customer Data Start --> */}
            <div className="lens_order_box" style={{ marginBottom: "10px" }}>
              <h2>Customer data</h2>
              <form action="">
                <div className="mb-3">
                  <label>Job Reference</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="(3)- 123456"
                  />
                </div>
                <div className="mb-3">
                  <label>Job type</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ashraf Rahaman"
                  />
                </div>
                <div className="mb-3">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="312.5 East Lamberg, Coastal line Rd"
                  />
                </div>
                <div className="mb-3">
                  <label>Phone No</label>
                  <input type="tel" className="form-control" />
                </div>
              </form>
            </div>
            {/* <!-- Customer Data End --> */}

            {/* <!-- Boxing System Start --> */}
            <div className="lens_order_box" style={{ marginBottom: "10px" }}>
              <h2>Boxing System</h2>
              <form action="">
                <div className="mb-3">
                  <label>Frame A box measurement</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="-8.00"
                  />
                </div>
                <div className="mb-3">
                  <label>Frame B box measurement</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="-8.00"
                  />
                </div>
                <div className="mb-3">
                  <label>Frame EB box measurement</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="15.00"
                  />
                </div>
                <div className="mb-3">
                  <label>Frame DBL box measurement</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="15.00"
                  />
                </div>
              </form>
            </div>
            {/* <!-- Boxing System End --> */}
          </div>

          {/* <!-- Lens type Selection Start --> */}
          <div className="col-12 col-lg-7">
            <div className="lens_order_box" style={{ marginBottom: "40px" }}>
              <h2>Lens type selection</h2>
              <form action="">
                <div className="d-flex flex-wrap" style={{ gap: "12px" }}>
                  <div className="mb-3">
                    <label>Lens style (R)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Lens style (L)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div className="d-flex flex-wrap" style={{ gap: "12px" }}>
                  <div className="mb-3">
                    <label>Material (R)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Material (L)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div className="d-flex flex-wrap" style={{ gap: "12px" }}>
                  <div className="mb-3">
                    <label>Color (R)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Color (L)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div
                  className="d-flex flex-wrap  three_input"
                  style={{ gap: "47px" }}
                >
                  <div className="d-flex flex-wrap " style={{ gap: "12px" }}>
                    <div className="mb-3">
                      <label>Sphere (R)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Cylinder (R)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Axis (R)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div
                    className="d-flex flex-wrap three_input"
                    style={{ gap: "12px" }}
                  >
                    <div className="mb-3">
                      <label>Sphere (L)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Cylinder (L)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Axis (L)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap" style={{ gap: "12px" }}>
                  <div className="mb-3">
                    <label>Distance PD (R)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Distance PD (L)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div className="d-flex flex-wrap" style={{ gap: "12px" }}>
                  <div className="mb-3">
                    <label>Near PD (R)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Near PD (L)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div className="d-flex flex-wrap" style={{ gap: "12px" }}>
                  <div className="mb-3">
                    <label>Vertical Decentration (R)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Vertical Decentration (L)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div
                  className="d-flex flex-wrap four_input"
                  style={{ gap: "7px" }}
                >
                  <div className="mb-3">
                    <label>Frame length (R)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Frame Height (R)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Power (R)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>BOC (R)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>

                <div
                  className="d-flex flex-wrap four_input"
                  style={{ gap: "7px" }}
                >
                  <div className="mb-3">
                    <label>Frame length (L)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Frame Height (L)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Power (L)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>BOC (L)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>

                <div
                  className="d-flex flex-wrap four_input"
                  style={{ gap: "7px" }}
                >
                  <div className="mb-3">
                    <label>Refraction (R)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Prism</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>

                <div
                  className="d-flex flex-wrap four_input"
                  style={{ gap: "7px" }}
                >
                  <div className="mb-3">
                    <label>Refraction (L)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Prism</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="d-flex flex-wrap  mb-2" style={{ gap: "12px" }}>
                  <div className="mb-3">
                    <label>Diameter (R)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>Diameter (L)</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <button onClick={() => setStep(1)} type="submit">
                  Submit and review
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <form action="">
          <div className="payment mb-3">
            <h2>Payment</h2>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="option1"
              />
              <label className="form-check-label">Pay with card</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="option2"
              />
              <label className="form-check-label">Pay with cash</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="option3"
              />
              <label className="form-check-label">Pay with Juice</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="option3"
              />
              <label className="form-check-label">Bank transfer</label>
            </div>
          </div>

          <button className="payment_btn" type="submit">
            Next
          </button>
        </form>
      )}
    </div>
  );
};

export default LensOrdering;
