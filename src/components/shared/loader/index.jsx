import { Fragment } from "react";

import "./style.scss";

const Loader = () => {
    return (
        <Fragment>
            <div className="loader-box">
                <span className="loader"></span>
            </div>
        </Fragment>
    );
};

export default Loader;
