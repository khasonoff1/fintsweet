import { Fragment } from "react";

import "./style.scss";

const Loader = () => {
  return (
    <Fragment>
      <span className="loader"></span>
      <div className="center">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </Fragment>
  );
};

export default Loader;
