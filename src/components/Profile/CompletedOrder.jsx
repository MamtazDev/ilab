import React from "react";
import camera from "../../assets/images/Cryptocurrency.png";


const CompletedOrder = () => {
 

  return (
    <div className="bg-white order_box">
      <h6 className="box_border_black text-black">Completed orders(12)</h6>
      <div
        style={{ marginBottom: "16px" }}
        className="d-flex justify-content-between align-items-center"
      >
        <div>
          <div className="d-flex gap-2 justify-content-between align-items-center">
            <img src={camera} alt="" />
            <div>
              <p className="name text-black">Lorem ipsum </p>
              <p className="price">25.05 USD</p>
            </div>
          </div>
        </div>
        <p className="time">3d 12hr</p>
        <p className="status">Completed</p>
      </div>
      <p className="box_border_black w-100"></p>
    </div>
  );
};

export default CompletedOrder;
