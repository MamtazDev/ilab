import React from "react";
import camera from "../../assets/images/Cryptocurrency.png";
import camera1 from "../../assets/images/Cryptocurrency (1).png";
import camera2 from "../../assets/images/Cryptocurrency (2).png";

const DelayedOrder = () => {
  const completedOrder = [
    {
      pic: camera,
      time: "3d 12hr",
    },
    {
      pic: camera1,
      time: "6d 8hr",
    },
    {
      pic: camera2,
      time: "8d 2hr",
    },
  ];
  return (
    <div className="bg-white order_box">
      <h6 className="box_border_black text-black">Delayed order(03)</h6>
      {completedOrder.map((order, index) => (
        <div key={index}>
          <div
            style={{ marginBottom: "16px" }}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <div className="d-flex gap-2 justify-content-between align-items-center">
                <img src={order.pic} alt="" />
                <div>
                  <p className="name text-black">Lorem ipsum </p>
                  <p className="price">25.05 USD</p>
                </div>
              </div>
            </div>

            <p className="time">{order.time}</p>
            <p className="delay_status">Delayed</p>
          </div>

          {completedOrder.length - 1 !== index && (
            <p className="box_border_black w-100"></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DelayedOrder;
