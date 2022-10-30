import { useEffect, useState } from "react";
import axios from "../api/axios";
import Footer from "../components/Layout/Footer/Footer";
import HeaderUser from "../components/Layout/Header/HeaderUser/HeaderUser";
import { toast } from "react-toastify";

function Profile() {
  const GET_PROFILE_URL = "auth/profile";
  const [profileUser, setProFileUser] = useState();
  const [phoneNumber, setPhoneNumBer] = useState();
  const [fullName, setFullName] = useState();
  const [birthDay, setBirthDay] = useState();
  const [avatarUrl, setAvatarUrl] = useState();
  const [address, setAddress] = useState();

  async function getProfileUser() {
    const token = localStorage.getItem("token");

    if (token) {
      await axios
        .get(GET_PROFILE_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setProFileUser(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    getProfileUser();
  }, []);

  async function handleChangeInfo() {
    const token = localStorage.getItem("token");
    await axios
      .put(
        GET_PROFILE_URL,
        JSON.stringify({
          phoneNumber: phoneNumber,
          fullName: fullName,
          birthDay: birthDay,
          avatarUrl: avatarUrl,
          address: address,
        }),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setProFileUser(res.data.data);
        toast.success(res.data.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message[0]);
        console.log(err);
      });
  }

  return (
    <>
      <main>
        <HeaderUser />
        <div className="container-xl px-4 mt-4">
          <hr className="mt-0 mb-4" />
          <div className="row">
            <div className="col-xl-4">
              <div className="card mb-4 mb-xl-0">
                <div className="card-header">Hình Của Bạn</div>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src={profileUser?.avatarUrl || ""}
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
                          value={profileUser?.fullName || ""}
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
                          value={profileUser?.address || ""}
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
                          value={profileUser?.phoneNumber}
                          onChange={(e) => setPhoneNumBer(e.target.value)}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputBirthday">
                          Ngày Sinh
                        </label>
                        <input
                          className="form-control"
                          id="inputBirthday"
                          type="text"
                          name="birthday"
                          placeholder="Enter your birthday"
                          value="06/10/1988"
                          onChange={(e) => setBirthDay(e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={handleChangeInfo}
                    >
                      Lưu Thay Đổi
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-50"></div>
        <Footer />
      </main>
    </>
  );
}

export default Profile;
