import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";

const WishlistMain = () => {
  return (
    <main>
      <Breadcrumb breadcrumbTitle="My Wishlist" breadcrumbSubTitle="Wishlist" />

      <div className="cart-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Hình Ảnh</th>
                        <th className="cart-product-name">Sản Phẩm</th>
                        <th className="product-price">Giá</th>
                        <th className="product-quantity">Số Lượng</th>
                        <th className="product-subtotal">Tổng</th>
                        <th className="product-remove">Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/course-details">
                            <a>
                              <img
                                src="assets/img/products/product-thumb-05.png"
                                alt="img not found"
                              />
                            </a>
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href="/course-details">
                            <a>Edit</a>
                          </Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">200.000 đ</span>
                        </td>
                        <td className="product-quantity">
                          <Link href="/cart">
                            <a className="edu-border-btn">Thêm Vào Giỏ Hàng</a>
                          </Link>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">200.000 đ</span>
                        </td>
                        <td className="product-remove">
                          <a href="#">
                            <i className="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/course-details">
                            <a>
                              <img
                                src="assets/img/products/product-thumb-11.png"
                                alt="img not found"
                              />
                            </a>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WishlistMain;
