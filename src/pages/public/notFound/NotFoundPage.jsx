import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

import { AuthContext } from "../../../context/AuthContext";

const NotFoundPage = () => {
    const { role, isAuth } = useContext(AuthContext);

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Link to={isAuth ? (role === "user" ? "/myPosts" : "/dashboard") : "/"}>
                    <Button type="primary">Back Home</Button>
                </Link>
            }
        />
    );
};
export default NotFoundPage;
