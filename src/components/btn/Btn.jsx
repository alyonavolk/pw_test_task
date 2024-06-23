// import "./btn.scss";
import React from "react";

const Btn = ({
  children,
  onClick,
  classes = "",
  Tag = "button",
  leftIcon = null,
  rightIcon = null,
  ...props
}) => {
  return (
    <Tag className={`btn ${classes ? " " + classes : ""}`} onClick={onClick} {...props}>
    {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
    <span className="btn__label">
      {children}
    </span>
    {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
    </Tag>
  );
};

export default Btn;
