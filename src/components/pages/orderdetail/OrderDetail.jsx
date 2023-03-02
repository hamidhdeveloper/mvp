import React from "react";
import "./OrderDetail.scss";
import orderimg from "../../../images/carimg.png";
import { Link } from "react-router-dom";

const OrderDetail = () => {
  return (
    <>
      <div className="container-fulid ordermaincontainer">
        <div className="row orderdetail">
          <div className="col-md-3  orderdetail-left">
            <h1>ORDER DETAIL:</h1>
            <div className="orderimg">
              <img src={orderimg} alt="myorder" />
            </div>
          </div>
          <div className="col-md-9 orderdetail-right">
            <p>Product Name: Canvas with wooden frame</p>
            <p>Sides: One Sided</p>
            <p>Material: Cotton Canvas</p>
            <p>Size: A4 (21x29.7)</p>
            <p>Finishing: Wood frame for canvas.</p>
          </div>
        </div>
        <div className="row order-bottom">
          <div className="col-md-6 order-bottom-left">
            <table className="table1">
              <tr>
                <td>No. of designs</td> <td>Quantity</td>
              </tr>
              <tr>
                <td>
                  <input type="number" />
                </td>{" "}
                <td>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td></td>{" "}
                <td>
                  <input type="checkbox"  className="custombox"/>
                  <span className="custom">Custom</span>
                </td>
              </tr>
            </table>
            <table className="table2">
              <tr>
                <td></td> <td>Urgency</td>
                <td>Price</td>{" "}
                <td>
                  Production in Riyadh Factory
                  <br /> (Delivery time not included)
                </td>
              </tr>
              <tr>
                <td>
                  <input type="radio" />
                </td>{" "}
                <td>Regular</td>
                <td>72.66</td> <td>3 working day(s) </td>
              </tr>
            </table>
            {/* <div className='row1'><span>No. of designs</span> <span>Quantity</span></div>
                    <div className='row2'><input type='checkbox' /> Custom</div> */}
          </div>
          <div className="col-md-6 order-bottom-right">
            <Link to='/goodjob'>
            <button>Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
