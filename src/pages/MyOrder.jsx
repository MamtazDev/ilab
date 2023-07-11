import React from "react";
import star from "../assets/images/star.png";
import halfstar from "../assets/images/half_star.png";
import Settings from "../assets/images/setting_icon.png";
import Title from "../components/utils/Title";
import Header from "../components/utils/Header";
import { Dropdown } from "react-bootstrap";

const MyOrder = () => {
  return (
    <div>
      <Header />
      <Title>My orders</Title>
      <div className="my_order_box table-responsive">
        <table className="table ">
          <thead>
            <tr>
              <th>#Order</th>
              <th>Product</th>
              <th>SKU</th>
              <th>Payment</th>
              <th>Order status</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1A2C334V</td>
              <td>Product Name</td>
              <td>C1226589</td>
              <td>$899.00</td>
              <td className="text-success">Completed</td>
              <td>
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={halfstar} alt="Star" />
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    className="bg-transparent border-0"
                    id="dropdown-basic"
                  >
                    <img src={Settings} alt="Setting Icon" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>

            <tr>
              <td style={{ color: "#AEAEAE" }}>1A2C334V</td>
              <td style={{ color: "#AEAEAE" }}>Product Name</td>
              <td style={{ color: "#AEAEAE" }}>C1226589</td>
              <td style={{ color: "#AEAEAE" }}>$899.00</td>
              <td className="text-danger">Cancelled </td>
              <td>
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />

                <img className="img-fluid" src={halfstar} alt="Star" />
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    className="bg-transparent border-0"
                    id="dropdown-basic"
                  >
                    <img src={Settings} alt="Setting Icon" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>

            <tr>
              <td>1A2C334V</td>
              <td>Product Name</td>
              <td>C1226589</td>
              <td>$899.00</td>
              <td className="text-success">Completed</td>
              <td>
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />

                <img className="img-fluid" src={halfstar} alt="Star" />
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    className="bg-transparent border-0"
                    id="dropdown-basic"
                  >
                    <img src={Settings} alt="Setting Icon" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>1A2C334V</td>
              <td>Product Name</td>
              <td>C1226589</td>
              <td>$899.00</td>
              <td className="text-success">Completed</td>
              <td>
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={star} alt="Star" />
                <img className="img-fluid" src={halfstar} alt="Star" />
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    className="bg-transparent border-0"
                    id="dropdown-basic"
                  >
                    <img src={Settings} alt="Setting Icon" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
