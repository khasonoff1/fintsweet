import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import PopularBlogsContextProvider from "./context/PopularBlogsContext.jsx";
import AllPostsContextProvider from "./context/AllPostsContext.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";

import "react-lazy-load-image-component/src/effects/blur.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from "./App.jsx";
import StoreProvider from "./redux/store/index.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ToastContainer />
        <PopularBlogsContextProvider>
            <AllPostsContextProvider>
                <AuthContextProvider>
                    <StoreProvider>
                        <App />
                    </StoreProvider>
                </AuthContextProvider>
            </AllPostsContextProvider>
        </PopularBlogsContextProvider>
    </React.StrictMode>
);
