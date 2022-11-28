import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Pagination from "../Common/Pagination";
import CourseBar from "../Course/CourseBar";
import ShopSidebar from "../Shop/ShopSidebar";
import Link from "next/link";
import axios from "../../api/axios";
import * as ReactBootStrap from "react-bootstrap";

import { useRouter } from "next/router";

const CourseMain = () => {
  const [dataCourses, setDataCourses] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const DATA_COURSES_URL = "courses";

  const router = useRouter();

  async function getDataCourse() {
    const token = localStorage.getItem("token");
    try {
      await axios
        .get(DATA_COURSES_URL, JSON.stringify({}), {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          console.log("check", res);
          setDataCourses(res.data.data);
          setNumPage(res.data.pagination.pageCount);
        });
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDataCourse();
  }, []);

  function NumToTime(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    if (minutes + "".length < 2) {
      minutes = "0" + minutes;
    }
    return hours + ":" + minutes;
  }

  function handleGetDetail(id) {
    router.push("/course-details");
    localStorage.setItem("id", id);
  }

  return (
    <main>
      <Breadcrumb breadcrumbTitle="Khóa Học" breadcrumbSubTitle="Khóa Học" />
      <CourseBar />
      {loading ? (
        <section className="course-content-area pb-90">
          <div className="container">
            <div className="row mb-10">
              <div className="col-xl-3 col-lg-4 col-md-12">
                <ShopSidebar />
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12">
                <div className="row">
                  {dataCourses?.map((item) => (
                    <div className="col-xl-4 col-lg-6 col-md-6" key={item._id}>
                      <div className="protfolio-course-2-wrapper mb-30">
                        <div className="student-course-img">
                          <Link href="/course">
                            <a>
                              <img
                                src={item.thumbnail}
                                alt="course-img"
                                className="rounded"
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="course-cart">
                          <div className="course-info-wrapper">
                            <div className="cart-info-body">
                              <Link href="/course">
                                <>
                                  {item.tags.map((tag) => (
                                    <a
                                      className="category-color category-color-3 mr-10"
                                      key={tag}
                                    >
                                      {tag}
                                    </a>
                                  ))}
                                </>
                              </Link>
                              <Link href="/course-details">
                                <a>
                                  <h3>{item.title}</h3>
                                </a>
                              </Link>
                              <div className="cart-lavel">
                                <h5>
                                  Level : <span>{item.level}</span>
                                </h5>
                              </div>
                              <div className="info-cart-text">
                                <ul>
                                  {item.highlights?.map((hight) => (
                                    <li key={hight}>
                                      <i className="far fa-check"></i>
                                      {hight}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="course-action">
                                <button
                                  className="view-details-btn"
                                  onClick={() => handleGetDetail(item._id)}
                                >
                                  <i className="flaticon-like">Chi Tiết</i>
                                </button>
                                <Link href="/course-details">
                                  <a className="c-share-btn">
                                    <i className="flaticon-previous"></i>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-course-2-content">
                          <div className="portfolio-course-wrapper">
                            <div className="portfolio-price">
                              <span>{item.price} đ</span>
                            </div>
                            <div className="portfolio-course-2">
                              <h3>
                                <Link href="/course-details">
                                  <a>{item.title}</a>
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="course-2-footer">
                          <div className="coursee-clock">
                            <i className="flaticon-clock"></i>
                            <span>
                              {NumToTime(item.durationInSeconds)} Tiếng
                            </span>
                          </div>
                          <div className="course-creadit">
                            <i className="flaticon-menu-1"></i>
                            <span>{item.numberOfLessons} Bài Học</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="col-12">
                    <Pagination numPage={numPage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <ReactBootStrap.Spinner animation="border" />
      )}
    </main>
  );
};

export default CourseMain;
