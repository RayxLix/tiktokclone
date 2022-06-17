import Header from "./Header";
import React from "react";

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}

export default HeaderOnly;
