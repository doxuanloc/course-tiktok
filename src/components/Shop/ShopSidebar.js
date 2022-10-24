import React, { useState } from "react";

const ShopSidebar = () => {
  const [isActive, setActive] = useState("false");
  const [isActiveA, setActiveA] = useState("false");
  const [isActiveB, setActiveB] = useState("false");
  const [isActiveC, setActiveC] = useState("false");
  const [isActiveD, setActiveD] = useState("false");
  const [isActiveE, setActiveE] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleToggleA = () => {
    setActiveA(!isActiveA);
  };
  const handleToggleB = () => {
    setActiveB(!isActiveB);
  };
  const handleToggleC = () => {
    setActiveC(!isActiveC);
  };
  const handleToggleD = () => {
    setActiveD(!isActiveD);
  };
  const handleToggleE = () => {
    setActiveE(!isActiveE);
  };

  return (
    <div>
      <div className="course-sidebar-widget mb-20">
        <div
          className={`course-sidebar-info ${
            isActive ? "danger" : "content-hidden"
          }`}
        >
          <h3 className="drop-btn" onClick={handleToggle}>
            Danh Mục
          </h3>
          <ul>
            <li>
              <div className="course-sidebar-list">
                <input className="edu-check-box" type="checkbox" id="e-bus" />
                <label className="edu-check-label" htmlFor="e-bus">
                  Edit (12)
                </label>
              </div>
            </li>
            <li>
              <div className="course-sidebar-list">
                <input className="edu-check-box" type="checkbox" id="e-dev" />
                <label className="edu-check-label" htmlFor="e-dev">
                  Marketing (9)
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="course-sidebar-widget mb-20">
        <div
          className={`course-sidebar-info ${
            isActiveC ? "danger" : "content-hidden"
          }`}
        >
          <h3 className="drop-btn" onClick={handleToggleC}>
            Level
          </h3>
          <ul>
            <li>
              <div className="course-sidebar-list">
                <input className="edu-check-box" type="checkbox" id="e-beg" />
                <label className="edu-check-label" htmlFor="e-beg">
                  Beginner (36)
                </label>
              </div>
            </li>
            <li>
              <div className="course-sidebar-list">
                <input className="edu-check-box" type="checkbox" id="e-inter" />
                <label className="edu-check-label" htmlFor="e-inter">
                  BASIC (25)
                </label>
              </div>
            </li>
            <li>
              <div className="course-sidebar-list">
                <input className="edu-check-box" type="checkbox" id="e-exp" />
                <label className="edu-check-label" htmlFor="e-exp">
                  Pro (32)
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
