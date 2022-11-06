import Head from "next/head";
import CourseMain from "../components/Course/CourseMain";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Common/Breadcrumb";
import Pagination from "../components/Common/Pagination";
import CourseBar from "../components/Course/CourseBar";
import ShopSidebar from "../components/Shop/ShopSidebar";
import Link from "next/link";
import axios from "../api/axios";
import * as ReactBootStrap from "react-bootstrap";

import { useRouter } from "next/router";

export default function MyCourse() {
  const [dataMyCourses, setDataMyCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const DATA_COURSES_URL = "courses/my-courses";

  const router = useRouter();

  async function getDataCourse() {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      await axios
        .get(DATA_COURSES_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setDataMyCourses(res.data.data);
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

  return (
    <>
      <Head>
        <title>Khóa Học Của Tôi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>
        <main>
          <Breadcrumb
            breadcrumbTitle="Khóa Học"
            breadcrumbSubTitle="Khóa Học Của Tôi"
          />
          <div className="pb-30"></div>
          {loading ? (
            <section className="course-content-area pb-90">
              <div className="container">
                <div className="row mb-10">
                  <div className="col-xl-3 col-lg-4 col-md-12">
                    <ShopSidebar />
                  </div>
                  <div className="col-xl-9 col-lg-8 col-md-12">
                    <div className="row">
                      {dataMyCourses?.map((item) => (
                        <div
                          className="col-xl-4 col-lg-6 col-md-6"
                          key={item._id}
                        >
                          <div className="protfolio-course-2-wrapper mb-30">
                            <div className="student-course-img">
                              <Link href="/course">
                                <img src={item.thumbnail} alt="course-img" />
                              </Link>
                            </div>
                            <div className="course-cart">
                              <div className="course-info-wrapper">
                                <div className="cart-info-body">
                                  <Link href="/course">
                                    <a className="category-color category-color-3">
                                      {item.tags[1]}
                                    </a>
                                  </Link>
                                  <Link href="/course-details">
                                    <h3>{item.title}</h3>
                                  </Link>
                                  <div className="cart-lavel">
                                    <h5>
                                      Level : <span>{item.level}</span>
                                    </h5>
                                  </div>
                                  <div className="info-cart-text">
                                    <ul>
                                      {item.highlights?.map((hight, index) => (
                                        <li key={index}>
                                          <i className="far fa-check"></i>
                                          {hight}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="course-action">
                                    <Link href="/course-details">
                                      <a className="c-share-btn">
                                        <i className="flaticon-previous"></i>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="portfolio-course-2-content"></div>
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

                      {dataMyCourses && (
                        <div class="d-block justify-content-center">
                          <div class="alert alert-warning" role="alert">
                            Bạn Chưa Có Khóa Học Nào!
                          </div>
                          <button type="button" class="btn btn-info">
                            <Link href="/course">Đến Trang Khóa Học</Link>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <div className="d-flex justify-content-center pb-50">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
