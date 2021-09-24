import React, { Fragment } from "react";

const Loading = () => {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </Fragment>
  );
};

export default Loading;
