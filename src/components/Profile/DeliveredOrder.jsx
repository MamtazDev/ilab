import React from "react";
import camera from "../../assets/images/Cryptocurrency.png";
import camera1 from "../../assets/images/Cryptocurrency (1).png";
import camera2 from "../../assets/images/Cryptocurrency (2).png";

const DeliveredOrder = () => {
  const deliveredOrder = [
    {
      pic: camera
    },
    {
      pic: camera1
    },
    {
      pic: camera2
    },
  ];
  return (
    <div className="order_box">
      <h6 className="box_border">Delivered Order (11)</h6>
      {deliveredOrder.map((order, index) => (
        <div key={index}>
          <div
            style={{ marginBottom: "16px" }}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <div className="d-flex gap-2 justify-content-between align-items-center">
                <img src={order.pic} alt="" />
                <div>
                  <p className="name">Lorem ipsum </p>
                  <p className="price">25.05 USD</p>
                </div>
              </div>
            </div>

            <p className="delivered_status">Delivered</p>
          </div>

          {deliveredOrder.length - 1 !== index && (
            <p className="box_border w-100"></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DeliveredOrder;
