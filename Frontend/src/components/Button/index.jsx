import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, variant, ...rest }) => {
  return (
    <div>
      <Link {...rest} className={`btn btn-${variant}`}>
        {label}
      </Link>
    </div>
  );
};

export default Button;
