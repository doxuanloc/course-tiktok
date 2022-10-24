import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const HeaderCart = ({ setCartOpen, cartOpen }) => {
  const router = useRouter();
  const [path, setPath] = useState("");
  const [cartCount, setCartCount] = useState([]);
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="cartmini__area">
      <div
        className={cartOpen ? "cartmini__wrapper opened" : "cartmini__wrapper"}
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
        <div className="cartmini__widget">
          <div className="cartmini__inner">
            <ul>
              <li>
                <div className="cartmini__thumb">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/img/products/product-thumb-01.png"
                        alt="image not found"
                      />
                    </a>
                  </Link>
                </div>
                <div className="cartmini__content">
                  <h5>
                    <a href="#">Edit Video</a>
                  </h5>
                  <div className="product-quantity mt-10 mb-10">
                    <span className="cart-minus" onClick={handleDecrement}>
                      <i className="far fa-minus"></i>
                    </span>
                    <p className="cart-input">{cartCount.length}</p>
                    <span className="cart-plus" onClick={handleIncrement}>
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                  <div className="product__sm-price-wrapper">
                    <span className="product__sm-price">400.000 đ</span>
                  </div>
                </div>
                <a href="#" className="cartmini__del">
                  <i className="fal fa-times"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="cartmini__checkout">
            <div className="cartmini__checkout-title mb-30">
              <h4>Tổng:</h4>
              <span>400.000 đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;
