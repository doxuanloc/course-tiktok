import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import axios from "../../api/axios";

const CheckoutMain = () => {
  const [BankTransfer, setBankTransfer] = useState(true);

  const [userNameProfile, setUserNameProfile] = useState("");

  const GET_USER_URL = "auth/profile/";

  async function getProfileUser() {
    const token = localStorage.getItem("token");

    if (token) {
      await axios
        .get(GET_USER_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // console.log(res.data.data);
          setUserNameProfile(res.data.data.fullName);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    getProfileUser();
  }, []);

  return (
    <main>
      <Breadcrumb
        breadcrumbTitle="Thanh Toán"
        breadcrumbSubTitle="Thanh Toán"
      />

      <section className="coupon-area pt-100 pb-30">
        <h1 className="pl-200 text-info">Chào {userNameProfile} !</h1>
      </section>

      <section className="checkout-area pb-70">
        <div className="container">
          <form action="#">
            <div className="row">
              <div className="col-lg-6">
                <div className="your-order mb-30 center">
                  <h3>Đơn Hàng Của Bạn</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Khóa Học</th>
                          <th className="product-total">Giá</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="cart_item">
                          <td className="product-name">
                            Edit Video{" "}
                            <strong className="product-quantity"> × 1</strong>
                          </td>
                          <td className="product-total">
                            <span className="amount">100000 đ</span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="shipping">
                          <th>Phương Thức Thanh Toán</th>
                          <td>
                            <ul>
                              <li>
                                <input
                                  type="radio"
                                  name="Shipping"
                                  onClick={() => setBankTransfer(true)}
                                />
                                <label>Chuyển Khoản Ngân Hàng</label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="Shipping"
                                  onClick={() => setBankTransfer(false)}
                                />
                                <label>Momo</label>
                              </li>
                              <li></li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Tổng Cộng</th>
                          <td>
                            <strong>
                              <span className="amount">100000 đ</span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  {BankTransfer ? (
                    <div className="payment-method">
                      <div className="accordion" id="checkoutAccordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="checkoutOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#bankOne"
                              aria-expanded="true"
                              aria-controls="bankOne"
                            >
                              VietComBank
                            </button>
                          </h2>
                          <div
                            id="bankOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="checkoutOne"
                            data-bs-parent="#checkoutAccordion"
                          >
                            <div className="accordion-body">
                              - Số Tài Khoản: 03223232323
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="paymentTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#payment"
                              aria-expanded="false"
                              aria-controls="payment"
                            >
                              TechComBank
                            </button>
                          </h2>
                          <div
                            id="payment"
                            className="accordion-collapse collapse"
                            aria-labelledby="paymentTwo"
                            data-bs-parent="#checkoutAccordion"
                          >
                            <div className="accordion-body">
                              Số Tài Khoản: 32372492034
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="paypalThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#paypal"
                              aria-expanded="false"
                              aria-controls="paypal"
                            >
                              MBBank
                            </button>
                          </h2>
                          <div
                            id="paypal"
                            className="accordion-collapse collapse"
                            aria-labelledby="paypalThree"
                            data-bs-parent="#checkoutAccordion"
                          >
                            <div className="accordion-body">
                              Số Tài Khoản: 2343284243
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="payment-method">
                      <div className="accordion" id="checkoutAccordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="checkoutOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#bankOne"
                              aria-expanded="true"
                              aria-controls="bankOne"
                            >
                              Chuyển Khoản Momo
                            </button>
                          </h2>
                          <div
                            id="bankOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="checkoutOne"
                            data-bs-parent="#checkoutAccordion"
                          >
                            <div className="accordion-body">
                              Số Điện Thoại: 37239393922
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="order-button-payment mt-20">
                    <button type="submit" className="edu-btn">
                      Đã Chuyển Khoản Thanh Toán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CheckoutMain;
