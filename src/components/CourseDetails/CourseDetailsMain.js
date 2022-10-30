import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";

import CourseDetailsSidebar from "./CourseDetailsSidebar";

import { toast } from "react-toastify";
import axios from "../../api/axios";

const CourseDetailsMain = () => {
  const [isActive, setActive] = useState("false");
  const [dataCourses, setDataCourses] = useState();

  const DATA_COURSES_URL = "courses";

  const router = useRouter();

  const handleToggle = () => {
    setActive(!isActive);
  };

  async function getDataCourse() {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    if (token) {
      await axios
        .get(
          `${DATA_COURSES_URL}/${id}`,
          JSON.stringify({
            headers: {
              Authorization: `${token}`,
            },
          })
        )
        .then((res) => {
          setDataCourses(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Đăng Nhập! Để xem chi tiết khóa học");
      router.push("/");
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
    <main>
      <Breadcrumb
        breadcrumbTitle="Khoa"
        breadcrumbSubTitle={dataCourses?.title}
      />
      <section className="course-detalis-area pb-90">
        <div className="container">
          <div className="row">
            <div className=" col-xxl-8 col-xl-8">
              <div className="course-detalis-wrapper mb-30">
                <div className="course-heading mb-20">
                  <h2>{dataCourses?.title}</h2>
                </div>
                <div className="course-detelis-meta">
                  <div className="course-meta-wrapper border-line-meta">
                    <div className="course-meta-img">
                      <Link href="/about">
                        <a>
                          <img src={dataCourses?.thumbnail} alt="course-meta" />
                        </a>
                      </Link>
                    </div>
                    <div className="course-meta-text">
                      <span>Được Tạo Bởi</span>
                      <h6>
                        <Link href="/about">
                          <a>{dataCourses?.trainer?.name}</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="course-Enroll border-line-meta">
                    <p>Tổng Số Lượng Tham Gia</p>
                    <span>5,420</span>
                  </div>
                  <div className="course-update border-line-meta">
                    <p>Ngày Mở Khóa Học</p>
                    <span>{dataCourses?.createdAt}</span>
                  </div>
                  <div className="course-category">
                    <p>Danh Mục</p>
                    <span>
                      <Link href="/course">
                        <a>{dataCourses?.tags}</a>
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="course-description pt-45 pb-30">
                  <div className="course-Description">
                    <h4>Mô Tả Khóa Học</h4>
                  </div>
                  <p>{dataCourses?.introduce}</p>
                </div>
                <div className="course-learn-wrapper">
                  <div className="course-learn">
                    <div className="course-leranm-tittle">
                      <h4 className="mb-15">Tham Gia Khóa Học Sẽ Được Gì</h4>
                    </div>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="course-leran-text f-left">
                          <ul>
                            <li>
                              {dataCourses?.numberOfDocuments} Tài Liệu Tham
                              Khảo Miễn Phí
                            </li>
                            <li>
                              {dataCourses?.numberOfExercises} Bài Tập Rèn Luyện
                              Sau Khóa Học
                            </li>
                            <li>
                              {dataCourses?.numberOfLessons} Video Hướng Dẫn
                              Chất Lượng
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="course-leran-text">
                          <ul>
                            <li>{dataCourses?.overview}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="course-curriculum pt-40 pb-50">
                  <div className="course-curriculam">
                    <h4>Chương Trình Giảng Dạy</h4>
                  </div>
                  <ul>
                    <li>
                      {dataCourses?.numberOfLessons} Video Hướng Dẫn •{" "}
                      {NumToTime(dataCourses?.durationInSeconds)} Tiếng
                    </li>
                  </ul>
                  <div className="course-curriculam-accodion mt-30">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <div className="accordion-body" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span className="accordion-header">
                              <span className="accordion-tittle">
                                <span>{dataCourses?.title}</span>
                              </span>
                              <span className="accordion-tittle-inner">
                                <span>
                                  {dataCourses?.numberOfLessons} Bài Học •
                                </span>
                              </span>
                            </span>
                          </button>
                        </div>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {dataCourses?.lessons?.map((item, index) => (
                              <div
                                className="course-curriculum-content d-sm-flex justify-content-between align-items-center"
                                key={index}
                              >
                                <div className="course-curriculum-info">
                                  <i className="flaticon-youtube"></i>
                                  <a href={item?.url}>
                                    <h4>{item?.title}</h4>
                                  </a>
                                </div>
                                <div className="course-curriculum-meta">
                                  <span>5:30</span>
                                  <span className="time">
                                    {" "}
                                    <i className="flaticon-lock"></i>
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            <span className="accordion-header">
                              <span className="accordion-tittle">
                                <span>Sorting- the Bubble Sort Algorithm</span>
                              </span>
                              <span className="accordion-tittle-inner">
                                <span>10 lectures • 55m</span>
                              </span>
                            </span>
                          </button>
                        </div>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="course-curriculum-content d-sm-flex justify-content-between align-items-center">
                              <div className="course-curriculum-info">
                                <i className="flaticon-youtube"></i>
                                <h4>Importing the libraries</h4>
                              </div>
                              <div className="course-curriculum-meta">
                                <span>6:30</span>
                                <span className="time">
                                  {" "}
                                  <i className="flaticon-lock"></i>
                                </span>
                              </div>
                            </div>
                            <div className="course-curriculum-content d-sm-flex justify-content-between align-items-center">
                              <div className="course-curriculum-info">
                                <i className="flaticon-youtube"></i>
                                <h4>Importing the libraries</h4>
                              </div>
                              <div className="course-curriculum-meta">
                                <span>8:30</span>
                                <span className="time">
                                  {" "}
                                  <i className="flaticon-lock"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-8">
              <CourseDetailsSidebar dataCourses={dataCourses} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetailsMain;
