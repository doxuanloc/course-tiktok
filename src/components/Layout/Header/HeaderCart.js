import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CartContext } from "../../../contexts/Cart";
import axios from "../../../api/axios";

const HeaderCart = ({ setCartOpen, cartOpen }) => {
  const router = useRouter();
  const [path, setPath] = useState("");
  const [phoneUser, setPhoneUser] = useState();
  const [fullNameUser, setFullnameUser] = useState();
  const ORDER_URL = "/orders";
  const GET_PROFILE_URL = "auth/profile";

  const storedCart =
    typeof window !== "undefined" ? localStorage.getItem("cart") : null;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(GET_PROFILE_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setFullnameUser(res.data.data.fullName);
          setPhoneUser(res.data.data.phoneNumber);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  async function handleCheckOut() {
    const token = localStorage.getItem("token");
    console.log(phoneUser, fullNameUser, storedCart[0]._id);
    await axios
      .post(
        ORDER_URL,
        {
          customerInfo: {
            phoneNumber: phoneUser,
            fullName: fullNameUser,
          },
          items: [
            {
              course: storedCart[0]._id,
            },
          ],
          paymentType: "BANKING",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        localStorage.setItem("id-order", res.data.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/checkout");
    setCartOpen(false);
  }

  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  return (
    <>
      <div className="cartmini__area">
        <div
          className={
            cartOpen ? "cartmini__wrapper opened" : "cartmini__wrapper"
          }
        >
          <div className="cartmini__title">
            <h4>Giỏ Hàng</h4>
          </div>
          <div className="cartmini__close">
            <button
              type="button"
              className="cartmini__close-btn"
              onClick={() => setCartOpen(false)}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <CartContext.Consumer>
            {({ removeFromCart, total }) => (
              <>
                {storedCart?.map((item) => (
                  <div className="cartmini__widget" key={item._id}>
                    <div className="cartmini__inner">
                      <ul>
                        <li>
                          <div className="cartmini__thumb">
                            <Link href="/">
                              <a>
                                <img src={item.thumbnail} alt="image" />
                              </a>
                            </Link>
                          </div>
                          <div className="cartmini__content">
                            <h5>
                              <a href="#">{item.title}</a>
                            </h5>
                            <div className="product__sm-price-wrapper">
                              <span className="product__sm-price">
                                {item.price} đ
                              </span>
                            </div>
                          </div>
                          <a href="#" className="cartmini__del">
                            <button
                              className="fal fa-times"
                              onClick={() => removeFromCart(item._id)}
                            ></button>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="cartmini__checkout">
                      <div className="cartmini__checkout-title mb-30">
                        <h4>Tổng:</h4>
                        <span>{total} đ</span>
                      </div>
                    </div>
                    <button
                      className="video-cart-btn ml-60"
                      onClick={() => handleCheckOut(storedCart)}
                    >
                      <Link href="/checkout">
                        <a className="fa fa-credit-card"></a>
                      </Link>{" "}
                      Thanh Toán Ngay
                    </button>
                  </div>
                ))}
              </>
            )}
          </CartContext.Consumer>
        </div>
      </div>
    </>
  );
};

export default HeaderCart;
