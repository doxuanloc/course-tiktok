import { useEffect, useState } from "react";
import axios from "../api/axios";
import Footer from "../components/Layout/Footer/Footer";
import HeaderUser from "../components/Layout/Header/HeaderUser/HeaderUser";
import { toast } from "react-toastify";

export default function Profile() {
  const GET_PROFILE_URL = "auth/profile";
  const [profileUser, setProFileUser] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [fullName, setFullName] = useState();
  const [birthDay, setBirthDay] = useState();
  const [avatarUrl, setAvatarUrl] = useState();
  const [address, setAddress] = useState();
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);

  async function getProfileUser() {
    const token = localStorage.getItem("token");
    setLoadingPage(true);
    if (token) {
      await axios
        .get(GET_PROFILE_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setProFileUser(res.data.data);
          setFullName(res.data.data.fullName);
          setBirthDay(res.data.data.birthDay);
          setAddress(res.data.data.address);
          setAvatarUrl(res.data.data.avatarUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setLoadingPage(false);
  }

  useEffect(() => {
    getProfileUser();
  }, []);

  async function handleChangeInfo() {
    const token = localStorage.getItem("token");
    setLoadingBtn(true);
    await axios
      .put(
        GET_PROFILE_URL,
        {
          phoneNumber: phoneNumber,
          fullName: fullName,
          birthDay: birthDay,
          avatarUrl: avatarUrl,
          address: address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setProFileUser(res.data.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message[0]);
        console.log(err);
      });
    setLoadingBtn(false);
  }

  return (
    <>
      <main>
        <HeaderUser />
        {loadingPage ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
            <div className="row">
              <div className="col-xl-4">
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Hình Của Bạn</div>
                  <div className="card-body text-center">
                    <img
                      className="img-account-profile rounded-circle mb-2"
                      src={avatarUrl || ""}
                      alt="Avatar"
                    />
                    <div className="small font-italic text-muted mb-4">
                      JPG or PNG no larger than 5 MB
                    </div>

                    <button className="btn btn-primary" type="button">
                      Tải Hình Mới
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="card mb-4">
                  <div className="card-header">Thông Tin Cá Nhân</div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="inputUsername">
                          Tên Đăng Nhập
                        </label>
                        <input
                          className="form-control"
                          id="inputUsername"
                          type="text"
                          value={profileUser?.email || ""}
                          disabled
                        />
                      </div>

                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputOrgName">
                            Tên Hiển Thị
                          </label>
                          <input
                            className="form-control"
                            id="inputOrgName"
                            type="text"
                            placeholder="Enter your organization name"
                            value={fullName || ""}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputLocation">
                            Nơi Sống
                          </label>
                          <input
                            className="form-control"
                            id="inputLocation"
                            type="text"
                            placeholder="Nhập Nơi Ở"
                            value={address || ""}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputPhone">
                            Số Điện Thoại Liên Hệ
                          </label>
                          <input
                            className="form-control"
                            id="inputPhone"
                            type="tel"
                            placeholder="Số Điện Thoại Của Bạn"
                            value={phoneNumber || ""}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputBirthday">
                            Ngày Sinh
                          </label>
                          <input
                            className="form-control"
                            id="inputBirthday"
                            type="date"
                            name="birthday"
                            placeholder="Enter your birthday"
                            value={birthDay || ""}
                            onChange={(e) => setBirthDay(e.target.value)}
                          />
                        </div>
                      </div>
                      {loadingBtn ? (
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled
                        >
                          <span
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Đang Thay Đổi...
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={handleChangeInfo}
                        >
                          Lưu Thay Đổi
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="pb-50"></div>
        <Footer />
      </main>
    </>
  );
}
