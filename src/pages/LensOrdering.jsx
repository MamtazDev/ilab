import React, { useState } from "react";
import Header from "../components/utils/Header";

const LensOrdering = () => {
  const [step, setStep] = useState(0);

  const [lensOrdering, setLenseOrdering] = useState({});

  const handleChange = (event) => {
    setLenseOrdering({
      ...lensOrdering,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (lensOrdering.length > 0) {
      setStep(1);
    } else {
      alert("fill up the input fields");
    }

    console.log(lensOrdering);
  };

  return (
    <div className="lens_ordering w-100">
      <Header />

      {step === 0 && (
        <form onSubmit={handleSubmit}>
          <div className="row g-0">
            <div className="col-12 col-lg-5 p-0 pe-lg-2">
              {/* <!-- Customer Data Start --> */}
              <div className="lens_order_box" style={{ marginBottom: "10px" }}>
                <h2>Customer data</h2>

                <div className="mb-3">
                  <label>Job Reference</label>
                  <input
                    type="text"
                    name="jobRef"
                    value={lensOrdering.job}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="(3)- 123456"
                  />
                </div>
                <div className="mb-3">
                  <label>Job type</label>
                  <select
                    name="jobType"
                    value={lensOrdering.jobType}
                    onChange={handleChange}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    name="name"
                    value={lensOrdering.name}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Ashraf Rahaman"
                  />
                </div>
                <div className="mb-3">
                  <label>Address</label>
                  <input
                    name="address"
                    value={lensOrdering.address}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="312.5 East Lamberg, Coastal line Rd"
                  />
                </div>
                <div className="mb-3">
                  <label>Phone No</label>
                  <input
                    name="phone"
                    value={lensOrdering.phone}
                    onChange={handleChange}
                    type="tel"
                    className="form-control"
                  />
                </div>
              </div>
              {/* <!-- Customer Data End --> */}

              {/* <!-- Boxing System Start --> */}
              <div className="lens_order_box" style={{ marginBottom: "10px" }}>
                <h2>Boxing System</h2>

                <div className="mb-3">
                  <label>Frame A box measurement</label>
                  <input
                    name="frameA"
                    value={lensOrdering.frameA}
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    placeholder="-8.00"
                  />
                </div>
                <div className="mb-3">
                  <label>Frame B box measurement</label>
                  <input
                    name="frameB"
                    value={lensOrdering.frameB}
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    placeholder="-8.00"
                  />
                </div>
                <div className="mb-3">
                  <label>Frame EB box measurement</label>
                  <input
                    name="frameEB"
                    value={lensOrdering.frameEB}
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    placeholder="15.00"
                  />
                </div>
                <div className="mb-3">
                  <label>Frame DBL box measurement</label>
                  <input
                    name="frameDBL"
                    value={lensOrdering.frameDBL}
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    placeholder="15.00"
                  />
                </div>
              </div>
              {/* <!-- Boxing System End --> */}
            </div>

            {/* <!-- Lens type Selection Start --> */}
            <div className="col-12 col-lg-7">
              <div className="lens_order_box" style={{ marginBottom: "40px" }}>
                <h2>Lens type selection</h2>

                <div className="d-flex flex-wrap" style={{ gap: "12px" }}>
                  <div className="mb-3">
                    <label>Lens style (R)</label>
                    <select
                      name="lensR"
                      value={lensOrdering.lensR}
                      onChange={handleChange}
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
                      name="lensL"
                      value={lensOrdering.lensL}
                      onChange={handleChange}
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
                      name="materialR"
                      value={lensOrdering.materialR}
                      onChange={handleChange}
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
                      name="materialL"
                      value={lensOrdering.materialL}
                      onChange={handleChange}
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
                      name="colorR"
                      value={lensOrdering.colorR}
                      onChange={handleChange}
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
                      name="colorL"
                      value={lensOrdering.colorL}
                      onChange={handleChange}
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
                        name="sphereR"
                        value={lensOrdering.sphereR}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Cylinder (R)</label>
                      <input
                        name="cylinderR"
                        value={lensOrdering.cylinderR}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Axis (R)</label>
                      <input
                        name="axisR"
                        value={lensOrdering.axisR}
                        onChange={handleChange}
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
                        name="sphereL"
                        value={lensOrdering.sphereL}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Cylinder (L)</label>
                      <input
                        name="cylinderL"
                        value={lensOrdering.cylinderL}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Axis (L)</label>
                      <input
                        name="axisL"
                        value={lensOrdering.axisL}
                        onChange={handleChange}
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
                      name="distanceR"
                      value={lensOrdering.distanceR}
                      onChange={handleChange}
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
                      name="distanceL"
                      value={lensOrdering.distanceL}
                      onChange={handleChange}
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
                      name="nearR"
                      value={lensOrdering.nearR}
                      onChange={handleChange}
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
                      name="nearL"
                      value={lensOrdering.nearL}
                      onChange={handleChange}
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
                      name="verticalR"
                      value={lensOrdering.verticalR}
                      onChange={handleChange}
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
                      name="verticalL"
                      value={lensOrdering.verticalL}
                      onChange={handleChange}
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
                      name="lengthR"
                      value={lensOrdering.lengthR}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Frame Height (R)</label>
                    <input
                      name="heightR"
                      value={lensOrdering.heightR}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Power (R)</label>
                    <input
                      name="powerR"
                      value={lensOrdering.powerR}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>BOC (R)</label>
                    <input
                      name="bocR"
                      value={lensOrdering.bocR}
                      onChange={handleChange}
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
                      name="lengthL"
                      value={lensOrdering.lengthL}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Frame Height (L)</label>
                    <input
                      name="heightL"
                      value={lensOrdering.heightL}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Power (L)</label>
                    <input
                      name="powerL"
                      value={lensOrdering.powerL}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>BOC (L)</label>
                    <input
                      name="bocL"
                      value={lensOrdering.bocL}
                      onChange={handleChange}
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
                      name="refractionR"
                      value={lensOrdering.refractionR}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      name="empty1"
                      value={lensOrdering.empty1}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      name="empty2"
                      value={lensOrdering.empty2}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Prism</label>
                    <input
                      name="prism1"
                      value={lensOrdering.prism1}
                      onChange={handleChange}
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
                      name="refractionL"
                      value={lensOrdering.refractionL}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      name="empty3"
                      value={lensOrdering.empty3}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      name="empty4"
                      value={lensOrdering.empty4}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Prism</label>
                    <input
                      name="prism"
                      value={lensOrdering.prism}
                      onChange={handleChange}
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
                      name="diameterR"
                      value={lensOrdering.diameterR}
                      onChange={handleChange}
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
                      name="diameterL"
                      value={lensOrdering.diameterL}
                      onChange={handleChange}
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

                <button type="submit">Submit and review</button>
              </div>
            </div>
          </div>
        </form>
      )}

      {step === 1 && (
        <div>
          <div className="row g-0">
            <div className="col-12 col-lg-5 p-0 pe-lg-2">
              {/* <!-- Customer Data Start --> */}
              <div className="lens_order_box" style={{ marginBottom: "10px" }}>
                <h2>Customer data</h2>

                <div className="mb-3">
                  <label>Job Reference</label>
                  <input
                    type="text"
                    value={lensOrdering.job}
                    className="form-control"
                    placeholder="(3)- 123456"
                  />
                </div>
                <div className="mb-3">
                  <label>Job type</label>
                  <select
                    name="jobType"
                    value={lensOrdering.jobType}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    name="name"
                    value={lensOrdering.name}
                    type="text"
                    className="form-control"
                    placeholder="Ashraf Rahaman"
                  />
                </div>
                <div className="mb-3">
                  <label>Address</label>
                  <input
                    name="address"
                    value={lensOrdering.address}
                    type="text"
                    className="form-control"
                    placeholder="312.5 East Lamberg, Coastal line Rd"
                  />
                </div>
                <div className="mb-3">
                  <label>Phone No</label>
                  <input
                    name="phone"
                    value={lensOrdering.phone}
                    type="tel"
                    className="form-control"
                  />
                </div>
              </div>
              {/* <!-- Customer Data End --> */}

              {/* <!-- Boxing System Start --> */}
              <div className="lens_order_box" style={{ marginBottom: "10px" }}>
                <h2>Boxing System</h2>

                <div className="mb-3">
                  <label>Frame A box measurement</label>
                  <input
                    name="frameA"
                    value={lensOrdering.frameA}
                    type="number"
                    className="form-control"
                    placeholder="-8.00"
                  />
                </div>
                <div className="mb-3">
                  <label>Frame B box measurement</label>
                  <input
                    name="frameB"
                    value={lensOrdering.frameB}
                    type="number"
                    className="form-control"
                    placeholder="-8.00"
                  />
                </div>
                <div className="mb-3">
                  <label>Frame EB box measurement</label>
                  <input
                    name="frameEB"
                    value={lensOrdering.frameEB}
                    type="number"
                    className="form-control"
                    placeholder="15.00"
                  />
                </div>
                <div className="mb-3">
                  <label>Frame DBL box measurement</label>
                  <input
                    name="frameDBL"
                    value={lensOrdering.frameDBL}
                    type="number"
                    className="form-control"
                    placeholder="15.00"
                  />
                </div>
              </div>
              {/* <!-- Boxing System End --> */}
            </div>

            {/* <!-- Lens type Selection Start --> */}
            <div className="col-12 col-lg-7">
              <div className="lens_order_box" style={{ marginBottom: "40px" }}>
                <h2>Lens type selection</h2>

                <div className="d-flex flex-wrap" style={{ gap: "12px" }}>
                  <div className="mb-3">
                    <label>Lens style (R)</label>
                    <select
                      name="lensR"
                      value={lensOrdering.lensR}
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
                      name="lensL"
                      value={lensOrdering.lensL}
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
                      name="materialR"
                      value={lensOrdering.materialR}
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
                      name="materialL"
                      value={lensOrdering.materialL}
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
                      name="colorR"
                      value={lensOrdering.colorR}
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
                      name="colorL"
                      value={lensOrdering.colorL}
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
                        name="sphereR"
                        value={lensOrdering.sphereR}
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Cylinder (R)</label>
                      <input
                        name="cylinderR"
                        value={lensOrdering.cylinderR}
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Axis (R)</label>
                      <input
                        name="axisR"
                        value={lensOrdering.axisR}
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
                        name="sphereL"
                        value={lensOrdering.sphereL}
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Cylinder (L)</label>
                      <input
                        name="cylinderL"
                        value={lensOrdering.cylinderL}
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label>Axis (L)</label>
                      <input
                        name="axisL"
                        value={lensOrdering.axisL}
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
                      name="distanceR"
                      value={lensOrdering.distanceR}
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
                      name="distanceL"
                      value={lensOrdering.distanceL}
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
                      name="nearR"
                      value={lensOrdering.nearR}
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
                      name="nearL"
                      value={lensOrdering.nearL}
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
                      name="verticalR"
                      value={lensOrdering.verticalR}
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
                      name="verticalL"
                      value={lensOrdering.verticalL}
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
                      name="lengthR"
                      value={lensOrdering.lengthR}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Frame Height (R)</label>
                    <input
                      name="heightR"
                      value={lensOrdering.heightR}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Power (R)</label>
                    <input
                      name="powerR"
                      value={lensOrdering.powerR}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>BOC (R)</label>
                    <input
                      name="bocR"
                      value={lensOrdering.bocR}
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
                      name="lengthL"
                      value={lensOrdering.lengthL}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Frame Height (L)</label>
                    <input
                      name="heightL"
                      value={lensOrdering.heightL}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Power (L)</label>
                    <input
                      name="powerL"
                      value={lensOrdering.powerL}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>BOC (L)</label>
                    <input
                      name="bocL"
                      value={lensOrdering.bocL}
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
                      name="refractionR"
                      value={lensOrdering.refractionR}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      name="empty1"
                      value={lensOrdering.empty1}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      name="empty2"
                      value={lensOrdering.empty2}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Prism</label>
                    <input
                      name="prism1"
                      value={lensOrdering.prism1}
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
                      name="refractionL"
                      value={lensOrdering.refractionL}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      name="empty3"
                      value={lensOrdering.empty3}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label></label>
                    <input
                      name="empty4"
                      value={lensOrdering.empty4}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label>Prism</label>
                    <input
                      name="prism"
                      value={lensOrdering.prism}
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
                      name="diameterR"
                      value={lensOrdering.diameterR}
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
                      name="diameterL"
                      value={lensOrdering.diameterL}
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

                <button onClick={() => setStep(2)}>Place order</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <form action="">
          <div className="payment mb-3">
            <h2>Payment</h2>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                name="payment"
                type="radio"
                value="option1"
              />
              <label className="form-check-label">Pay with card</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="payment"
                className="form-check-input"
                type="radio"
                value="option2"
              />
              <label className="form-check-label">Pay with cash</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="payment"
                className="form-check-input"
                type="radio"
                value="option3"
              />
              <label className="form-check-label">Pay with Juice</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="payment"
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
