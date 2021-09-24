import React, { Fragment } from "react";

interface IError {
  error: string;
  role: string;
  className: string;
}

const Error = ({ error, role, className }: IError) => {
  return (
    <Fragment>
      <div className="container" style={{ width: "80%" }}>
        <div className={`alert ${className} mt-5`} role={role}>
          <p style={{ fontSize: "18px" }}>{error}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Error;
