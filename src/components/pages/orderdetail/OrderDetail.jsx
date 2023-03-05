import React from "react";
import "./OrderDetail.scss";
import orderimg from "../../../images/carimg.png";
import { Link, useLocation } from "react-router-dom";
import { useTranslation  } from "react-i18next";

const OrderDetail = () => {
  const { t } = useTranslation();
  const location = useLocation();
  if(location.pathname === '/order') {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight= '0px';
  }
  return (
    <>
      <div className="container-fulid ordermaincontainer">
        <div className="row orderdetail">
          <div className="col-md-3  orderdetail-left">
            <h1>{t('ORDER DETAIL')}:</h1>
            <div className="orderimg">
              <img src={orderimg} alt="myorder" />
            </div>
          </div>
          <div className="col-md-9 orderdetail-right">
            <p>{t('Product Name')}: {t('Canvas with wooden frame')}</p>
            <p>{t('Sides')}: {t('One sided')}</p>
            <p>{t('Material')}: {t('Cotton Canvas')}</p>
            <p>{t('Size')}: A4 (21x29.7)</p>
            <p>{t('Finishing')}: {t('Wood frame for canvas.')}</p>
          </div>
        </div>
        <div className="row order-bottom">
          <div className="col-md-6 order-bottom-left">
            <table className="table1">
              <tr>
                <td>{t('No. of designs')}</td> <td>{t('Quantity')}</td>
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
                  <span className="custom">{t('Custom')}</span>
                </td>
              </tr>
            </table>
            <table className="table2">
              <tr>
                <td></td> <td>{t('Urgency')}</td>
                <td>{t('Price')}</td>{" "}
                <td>
                {t('Production in Riyadh Factory')}
                  <br /> {t('(Delivery time not included)')}
                </td>
              </tr>
              <tr>
                <td>
                  <input type="radio" />
                </td>{" "}
                <td>{t('Regular')}</td>
                <td>72.66</td> <td>{t('3 working day(s)')} </td>
              </tr>
            </table>
            {/* <div className='row1'><span>No. of designs</span> <span>Quantity</span></div>
                    <div className='row2'><input type='checkbox' /> Custom</div> */}
          </div>
          <div className="col-md-6 order-bottom-right">
            <Link to='/goodjob'>
            <button>{t('Add to cart')}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
