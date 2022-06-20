import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header(props) {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo*/}
        {/* search */}
        {/* navigate */}
      </div>
    </header>
  );
}

export default Header;
