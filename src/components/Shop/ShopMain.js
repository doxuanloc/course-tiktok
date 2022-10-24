import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";
import ShopSidebar from "./ShopSidebar";

const ShopMain = () => {
  return (
    <main>
      <Breadcrumb breadcrumbTitle="Shop" breadcrumbSubTitle="Shop" />

      <section className="shop-area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12">
              <ShopSidebar />
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="products-wrapper">
                <div className="product-items text-center">
                  <div className="product-img">
                    <Link href="/shop-details">
                      <a>
                        <img
                          src="assets/img/products/product-thumb-01.png"
                          alt="product-img"
                        />
                      </a>
                    </Link>
                    <div className="shop-quick-view">
                      <ul>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-cart-arrow-down"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/wishlist">
                            <a>
                              <i className="fal fa-heart"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-eye"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <Link href="/shop-details">
                        <a>Edit Video</a>
                      </Link>
                    </h4>
                    <span>400.000 đ</span>
                    <div className="course-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="product-items text-center">
                  <div className="product-img">
                    <Link href="/shop-details">
                      <a>
                        <img
                          src="assets/img/products/product-thumb-08.png"
                          alt="product-img"
                        />
                      </a>
                    </Link>
                    <div className="shop-quick-view">
                      <ul>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-cart-arrow-down"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/wishlist">
                            <a>
                              <i className="fal fa-heart"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-eye"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <Link href="/shop-details">
                        <a>Memoirs of a Geisha</a>
                      </Link>
                    </h4>
                    <span>$13.00</span>
                    <div className="course-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="product-items text-center">
                  <div className="product-img">
                    <Link href="/shop-details">
                      <a>
                        <img
                          src="assets/img/products/product-thumb-09.png"
                          alt="product-img"
                        />
                      </a>
                    </Link>
                    <div className="shop-quick-view">
                      <ul>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-cart-arrow-down"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/wishlist">
                            <a>
                              <i className="fal fa-heart"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-eye"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <Link href="/shop-details">
                        <a>Very First Sight</a>
                      </Link>
                    </h4>
                    <span>$22.00</span>
                    <div className="course-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="product-items text-center">
                  <div className="product-img">
                    <Link href="/shop-details">
                      <a>
                        <img
                          src="assets/img/products/product-thumb-10.png"
                          alt="product-img"
                        />
                      </a>
                    </Link>
                    <div className="shop-quick-view">
                      <ul>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-cart-arrow-down"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/wishlist">
                            <a>
                              <i className="fal fa-heart"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-eye"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <Link href="/shop-details">
                        <a>The Almanack</a>
                      </Link>
                    </h4>
                    <span>$24.00</span>
                    <div className="course-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="product-items text-center">
                  <div className="product-img">
                    <Link href="/shop-details">
                      <a>
                        <img
                          src="assets/img/products/product-thumb-11.png"
                          alt="product-img"
                        />
                      </a>
                    </Link>
                    <div className="shop-quick-view">
                      <ul>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-cart-arrow-down"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/wishlist">
                            <a>
                              <i className="fal fa-heart"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-eye"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <Link href="/shop-details">
                        <a>Wealth and Happiness</a>
                      </Link>
                    </h4>
                    <span>$24.00</span>
                    <del className="shop-old-price">$75.50</del>
                    <div className="course-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="product-items text-center">
                  <div className="product-img">
                    <Link href="/shop-details">
                      <a>
                        <img
                          src="assets/img/products/product-thumb-12.png"
                          alt="product-img"
                        />
                      </a>
                    </Link>
                    <div className="shop-quick-view">
                      <ul>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-cart-arrow-down"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/wishlist">
                            <a>
                              <i className="fal fa-heart"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-eye"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <Link href="/shop-details">
                        <a>Rabbit drawing book</a>
                      </Link>
                    </h4>
                    <span>$23.00</span>
                    <div className="course-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="product-items text-center">
                  <div className="product-img">
                    <Link href="/shop-details">
                      <a>
                        <img
                          src="assets/img/products/product-thumb-13.png"
                          alt="product-img"
                        />
                      </a>
                    </Link>
                    <div className="shop-quick-view">
                      <ul>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-cart-arrow-down"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/wishlist">
                            <a>
                              <i className="fal fa-heart"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-eye"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <Link href="/shop-details">
                        <a>Time Management</a>
                      </Link>
                    </h4>
                    <span>$32.00</span>
                    <div className="course-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="product-items text-center">
                  <div className="product-img">
                    <Link href="/shop-details">
                      <a>
                        <img
                          src="assets/img/products/product-thumb-14.png"
                          alt="product-img"
                        />
                      </a>
                    </Link>
                    <div className="shop-quick-view">
                      <ul>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-cart-arrow-down"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/wishlist">
                            <a>
                              <i className="fal fa-heart"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-eye"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <Link href="/shop-details">
                        <a>Startup Dream</a>
                      </Link>
                    </h4>
                    <span>$21.00</span>
                    <div className="course-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="product-items text-center">
                  <div className="product-img">
                    <Link href="/shop-details">
                      <a>
                        <img
                          src="assets/img/products/product-thumb-15.png"
                          alt="product-img"
                        />
                      </a>
                    </Link>
                    <div className="shop-quick-view">
                      <ul>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-cart-arrow-down"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/wishlist">
                            <a>
                              <i className="fal fa-heart"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-eye"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <Link href="/shop-details">
                        <a>Positive Attitude</a>
                      </Link>
                    </h4>
                    <span>$75.00</span>
                    <del className="shop-old-price">$75.50</del>
                    <div className="course-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="product-items text-center">
                  <div className="product-img">
                    <Link href="/shop-details">
                      <a>
                        <img
                          src="assets/img/products/product-thumb-16.png"
                          alt="product-img"
                        />
                      </a>
                    </Link>
                    <div className="shop-quick-view">
                      <ul>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-cart-arrow-down"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/wishlist">
                            <a>
                              <i className="fal fa-heart"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart">
                            <a>
                              <i className="fal fa-eye"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <Link href="/shop-details">
                        <a>Options Handboo</a>
                      </Link>
                    </h4>
                    <span>$11.00</span>
                    <div className="course-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShopMain;
