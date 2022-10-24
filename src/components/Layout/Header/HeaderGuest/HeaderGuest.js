import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import HeaderCart from "../HeaderCart";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { useRouter } from "next/router";
import useSticky from "../../../../hooks/useSticky";

const HeaderGuest = ({ setShowHeaderUser }) => {
  // sticky nav
  const { sticky } = useSticky();

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signupOpen, setSingUpOpen] = useState(false);

  const [countOrder, setCountOrder] = useState(1);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);
  return (
    <header>
      <div className="header-top-area d-none d-lg-block">
        <div className="container-fluid">
          <div className="header-top-inner">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8">
                <div className="header-top-icon">
                  <a href="tel:(555)674890556">
                    <i className="fas fa-phone"></i>0329232323
                  </a>
                  <a href="mailto:info@example.com">
                    <i className="fal fa-envelope"></i>info@example.com
                  </a>
                  <i className="fal fa-map-marker-alt"></i>
                  <span>Ho Chi Minh</span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="header-top-login d-flex f-right">
                  <div className="header-social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          sticky
            ? "sticky header-area-2 sticky-header"
            : "header-area-2 sticky-header"
        }
      >
        <div className="container-fluid">
          <div className="header-main-wrapper">
            <div className="row align-items-center">
              <div className="col-3 col-lg-3 col-md-3 col-sm-3 col-3">
                <div className="header-logo">
                  <Link href="/">
                    <a>
                      <img
                        width="80px"
                        src="assets/img/logo/tiktok.jpg"
                        alt="img"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                <div className="header-main-right  d-flex justify-content-end">
                  <div className="main-menu mr-30 d-none d-xl-block">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="">
                          <Link href="/">
                            <a>Trang Chủ</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/course">
                            <a>Khóa Học</a>
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <a>Cửa Hàng</a>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/wishlist">
                                <a>Danh Sách Đơn Hàng</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/cart">
                                <a>Giỏ Hàng</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/checkout">
                                <a>Thanh Toán</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/about">
                            <a>Về Chúng Tôi</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <a>Liên Hệ</a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-btn">
                    <div className="cart-wrapper mr-45">
                      <a
                        href="#!"
                        className="cart-toggle-btn"
                        onClick={() => {
                          setCartOpen(!cartOpen);
                        }}
                      >
                        <div className="header__cart-icon p-relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19.988"
                            height="19.988"
                            viewBox="0 0 19.988 19.988"
                          >
                            <g id="trolley-cart" transform="translate(-1 -1)">
                              <path
                                id="Path_36"
                                data-name="Path 36"
                                d="M1.666,2.333H3.8L6.159,12.344a1.993,1.993,0,0,0,.171,3.98H17.656a.666.666,0,1,0,0-1.333H6.33a.666.666,0,0,1,0-1.333H17.578a1.992,1.992,0,0,0,1.945-1.541l1.412-6a2,2,0,0,0-1.946-2.456H5.486L4.98,1.514A.666.666,0,0,0,4.331,1H1.666a.666.666,0,0,0,0,1.333ZM18.989,5a.677.677,0,0,1,.649.819l-1.412,6a.662.662,0,0,1-.648.514H7.524L5.8,5Z"
                                transform="translate(0 0)"
                                fill="#141517"
                              />
                              <path
                                id="Path_37"
                                data-name="Path 37"
                                d="M20,27a2,2,0,1,0,2-2A2,2,0,0,0,20,27Zm2.665,0A.666.666,0,1,1,22,26.333.666.666,0,0,1,22.665,27Z"
                                transform="translate(-6.341 -8.01)"
                                fill="#141517"
                              />
                              <path
                                id="Path_38"
                                data-name="Path 38"
                                d="M9,27a2,2,0,1,0,2-2A2,2,0,0,0,9,27Zm2.665,0A.666.666,0,1,1,11,26.333.666.666,0,0,1,11.665,27Z"
                                transform="translate(-2.67 -8.01)"
                                fill="#141517"
                              />
                            </g>
                          </svg>
                          <span className="item-number">{countOrder}</span>
                        </div>
                      </a>
                    </div>
                    <span
                      className="edu-four-btn d-none d-lg-block"
                      onClick={() => {
                        setSignInOpen(!signInOpen);
                      }}
                    >
                      Đăng Nhập
                    </span>
                    <div className="menu-bar ml-20">
                      <a
                        className="side-toggle header-2"
                        href="#!"
                        onClick={() => {
                          setMenuOpen(!menuOpen);
                        }}
                      >
                        <div className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        onClick={() => setMenuOpen(false)}
        className={
          menuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"
        }
      ></div>

      <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div
        onClick={() => setCartOpen(false)}
        className={cartOpen ? "body-overlay opened" : "body-overlay"}
      ></div>

      <SignIn
        signInOpen={signInOpen}
        setSignInOpen={setSignInOpen}
        setShowHeaderUser={setShowHeaderUser}
      />
      <div
        onClick={() => setSignInOpen(false)}
        className={
          signInOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>

      <SignUp signupOpen={signupOpen} setSingUpOpen={setSingUpOpen} />
      <div
        onClick={() => setSingUpOpen(false)}
        className={
          signupOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </header>
  );
};

export default HeaderGuest;
