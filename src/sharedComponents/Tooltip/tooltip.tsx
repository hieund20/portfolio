import React, { Fragment } from "react";
import "./tooltip.scss";

const Tooltip = (props: any) => {
  const { text, children, isEllipsis = false } = props;

  return (
    <div className="tooltip-container">
      <div className={`tooltip-content ${isEllipsis ? "ellipsis" : ""}`}>
        {children}
      </div>
      <span className="tooltip">{text}</span>
    </div>
  );
};

export default Tooltip;
