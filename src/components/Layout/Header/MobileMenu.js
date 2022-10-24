import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SignIn from "./SignIn";

const MobileMenu = ({ setMenuOpen, menuOpen }) => {
  const [signinOpen, setSingInOpen] = useState(false);

  const [home, setHome] = useState(false);
  const [courses, setcourses] = useState(false);
  const [pages, setPages] = useState(false);
  const [project, setProject] = useState(false);
  const [blog, setBlog] = useState(false);
  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  const openMobileMenu = (menu) => {
    if (menu == "home") {
      setHome(!home);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "courses") {
      setHome(false);
      setcourses(!courses);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "pages") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setProject(false);
      setPages(!pages);
    } else if (menu == "project") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(!project);
    } else if (menu == "blog") {
      setHome(false);
      setcourses(false);
      setBlog(!blog);
      setPages(false);
      setProject(false);
    } else if (menu == "instructor") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "zoom") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "events") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "faqs") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    }
  };

  return (
    <div className="fix">
      <div className={menuOpen ? "side-info info-open" : "side-info"}>
        <div className="side-info-content">
          <div className="offset-widget offset-logo mb-40">
            <div className="row align-items-center">
              <div className="col-9">
                <Link href="/">
                  <a>
                    <img
                      width="80px"
                      src="assets/img/logo/tiktok.jpg"
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-3 text-end">
                <button
                  className="side-info-close"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="mm-menu mb-30 d-block d-xl-none">
            <ul>
              <li
                className={courses ? "has-droupdown active" : "has-droupdown"}
              >
                <a
                  onClick={() => {
                    openMobileMenu("courses");
                  }}
                >
                  <Link href="/course">
                    <a>Khóa Học</a>
                  </Link>
                </a>
              </li>
              <li
                className={project ? "has-droupdown active" : "has-droupdown"}
              >
                <a
                  onClick={() => {
                    openMobileMenu("project");
                  }}
                >
                  Cửa Hàng
                </a>
                <ul className={project ? "sub-menu active" : "sub-menu"}>
                  <li>
                    <Link href="/shop-details">
                      <a>Chi Tiết Cửa Hàng</a>
                    </Link>
                  </li>
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
              <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                <a
                  onClick={() => {
                    openMobileMenu("pages");
                  }}
                >
                  Trang
                </a>
                <ul className={pages ? "sub-menu active" : "sub-menu"}>
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
              </li>
            </ul>
          </div>
          <div className="offset-widget offset_searchbar mb-30">
            <div className="menu-search position-relative ">
              <form action="#" className="filter-search-input">
                <input type="text" placeholder="Tìm Kiếm Từ Khóa..." />
                <button>
                  <i className="fal fa-search"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="offset-widget offset_menu-top mb-20">
            <div className="header-menu-top-icon mb-20">
              <a href="#">
                <i className="fas fa-phone"></i>(092) 674 890 556
              </a>
              <a href="#">
                <i className="fal fa-envelope"></i>info@example.com
              </a>
              <i className="fal fa-map-marker-alt"></i>
              <span>Ho Chi Minh</span>
            </div>
          </div>
          <div className="offset-widget button mb-20 d-block d-lg-none">
            <span
              className="edu-four-btn"
              onClick={() => {
                setSingInOpen(!signinOpen);
              }}
            >
              Đăng Kí Ngay
            </span>
          </div>
        </div>
      </div>

      <SignIn signinOpen={signinOpen} setSingInOpen={setSingInOpen} />
      <div
        onClick={() => setSingInOpen(false)}
        className={
          signinOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </div>
  );
};

export default MobileMenu;
