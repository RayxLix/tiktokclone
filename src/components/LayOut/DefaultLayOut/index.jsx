import Header from "./Header";
import SideBar from "./SideBar";

import React from "react";
import className from "classnames/bind";
import styles from "./DefaultLayOut.module.scss";

const cx = className.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <SideBar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
