import React from "react";
import "../components/Profile/Profile.css";
import search from "../assets/icon/search.png";
import Title from "../components/utils/Title";
import IncomingOrder from "../components/Profile/IncomingOrder";
import CompletedOrder from "../components/Profile/CompletedOrder";

const Profile = () => {
  return (
    <div>
      <div className="row g-0">
        <div className="col-8 ">
          <div className="cart">
            <div className="search d-flex gap-2 align-items-center">
              <img src={search} alt="" />
              <input
                className="border-0 w-100"
                type="search"
                placeholder="Search here"
              />
            </div>
            <Title>Cart</Title>

            <div className="row ">
              <div className="col-5">
                <IncomingOrder />
              </div>
              <div className="col-7">
                <CompletedOrder/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Profile;
