import React from "react";
import star from "../assets/images/star.png";
import halfstar from "../assets/images/half_star.png";
import Settings from "../assets/images/setting_icon.png";
import Title from "../components/utils/Title";
import Header from "../components/utils/Header";

const Receipt = () => {
  return (
    <div>
         <Header />
      <Title>Receipts</Title>
      <div className="my_order_box">
        <table className="table">
          <thead>
            <tr>
              <th>Date and time</th>
              <th>Product</th>
              <th>SKU</th>
              <th>Payment Method</th>
              <th>Receipt</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((data, index) => (
              <tr key={index}>
                <td className="d-flex flex-column ">
                  <span>04/01/2023</span>{" "}
                  <span className="text-secondary">at 5.00pm</span>
                </td>
                <td>Product Name</td>
                <td>C1226589</td>
                <td>Mastercard</td>
                <td>Mastercard</td>

                <td className="text-success">Download Receipt</td>

                <td>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={Settings} alt="Setting Icon" />{" "}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Receipt;
