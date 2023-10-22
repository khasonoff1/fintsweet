import { Fragment, useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import "./header.scss";

const Header = () => {
    const [togle, setTogle] = useState(false);

    const { isAuth, role } = useContext(AuthContext);

    const togleOpen = () => {
        setTogle(true);
        document.body.style.overflow = "hidden";
    };
    const togleClose = () => {
        setTogle(false);
        document.body.style.overflow = "auto";
    };

    return (
        <Fragment>
            <header className="header">
                <div className="container">
                    <div className="header__box">
                        {isAuth === true && role === "user" ? (
                            <NavLink to="/myPosts" className="header__link">
                                My posts
                            </NavLink>
                        ) : (
                            <NavLink to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="140" viewBox="0 0 140 29" fill="none" className="logo">
                                    <g clipPath="url(#clip0_8557_664)">
                                        <path d="M139.752 21.6557V25.1203H136.846C133.745 25.0228 132.088 23.3481 132.088 20.2026V12.2899H130.059V9.25068H132.088V5.84814H136.376V9.21523H139.655V12.2456H136.376V19.7773C136.376 20.7962 136.58 21.6114 138.148 21.6114L139.752 21.6557Z" fill="white" />
                                        <path d="M112.965 17.2166V16.9862C112.919 15.9671 113.074 14.9488 113.422 13.9898C113.77 13.0308 114.303 12.1498 114.992 11.3975C115.681 10.6451 116.512 10.0361 117.437 9.6054C118.362 9.17468 119.362 8.9307 120.382 8.88745C120.585 8.88745 120.798 8.88745 121.002 8.88745C125.051 8.88745 128.604 11.2444 128.604 16.8621V18.0583H117.351C117.466 20.6457 118.866 22.1077 121.223 22.1077C123.252 22.1077 124.2 21.2216 124.475 19.928H128.525C128.028 23.3039 125.335 25.1824 121.073 25.1824C116.394 25.1469 112.965 22.1875 112.965 17.2166ZM124.387 15.3469C124.236 12.99 123.049 11.8558 120.984 11.8558C118.919 11.8558 117.732 13.1318 117.44 15.3469H124.387Z" fill="white" />
                                        <path d="M95.4573 17.2166V16.9862C95.4108 15.9685 95.5654 14.9516 95.9122 13.9937C96.259 13.0358 96.7912 12.1557 97.4783 11.4035C98.1654 10.6514 98.994 10.042 99.9168 9.61032C100.839 9.1786 101.838 8.93296 102.856 8.88745C103.06 8.88745 103.272 8.88745 103.476 8.88745C107.526 8.88745 111.088 11.2444 111.088 16.8621V18.0583H99.8433C99.9585 20.6457 101.359 22.1077 103.716 22.1077C105.745 22.1077 106.693 21.2216 106.967 19.928H111.017C110.512 23.3039 107.818 25.1824 103.556 25.1824C98.8864 25.1469 95.4573 22.1875 95.4573 17.2166ZM106.879 15.3469C106.728 12.99 105.541 11.8558 103.476 11.8558C101.412 11.8558 100.26 13.1672 99.932 15.3381L106.879 15.3469Z" fill="white" />
                                        <path d="M70.8867 9.21509H75.4234L78.1968 19.7239L81.2361 9.21509H84.7804L87.5272 19.7239L90.4513 9.21509H94.607L89.6804 24.8277H85.4272L82.769 15.0277L79.9247 24.8277H75.6184L70.8867 9.21509Z" fill="white" />
                                        <path d="M56.4688 19.9189H60.5181C60.7042 21.3278 61.4042 22.1341 63.265 22.1341C64.9308 22.1341 65.7017 21.505 65.7017 20.4328C65.7017 19.3607 64.8156 18.9088 62.5472 18.5898C58.3915 17.9607 56.7877 16.7645 56.7877 13.7164C56.7877 10.4645 59.765 8.85181 62.9903 8.85181C66.4548 8.85181 69.0688 10.11 69.4409 13.6986H65.4447C65.4192 13.4212 65.339 13.1516 65.2087 12.9053C65.0784 12.6591 64.9006 12.4411 64.6855 12.264C64.4705 12.0868 64.2225 11.9541 63.9559 11.8733C63.6892 11.7926 63.4092 11.7655 63.132 11.7936H62.9991C61.5991 11.7936 60.7839 12.4493 60.7839 13.4062C60.7839 14.3632 61.5371 14.7797 63.8232 15.1075C67.7042 15.6923 69.8751 16.6759 69.8751 20.0164C69.8751 23.3569 67.4206 25.1467 63.3093 25.1467C59.1979 25.1467 56.5839 23.2948 56.4688 19.9189Z" fill="white" />
                                        <path d="M39.2617 9.21514H43.5503V11.6873C44.0337 10.7799 44.7674 10.0304 45.6643 9.52772C46.5612 9.02509 47.5835 8.79051 48.6098 8.85185C51.6491 8.85185 53.8554 10.7038 53.8554 14.9303V24.8632H49.6199V15.5506C49.6199 13.4329 48.7959 12.4227 46.882 12.4227C46.4774 12.3875 46.0699 12.4325 45.6829 12.5552C45.2958 12.6779 44.9368 12.8758 44.6264 13.1376C44.316 13.3995 44.0604 13.72 43.8742 14.0809C43.688 14.4417 43.5749 14.8358 43.5415 15.2405C43.5193 15.4288 43.5193 15.6192 43.5415 15.8076V24.8278H39.2617V9.21514Z" fill="white" />
                                        <path d="M30.9858 5.28988C30.9703 4.86229 31.0819 4.4397 31.3067 4.07562C31.5315 3.71153 31.8592 3.42233 32.2484 3.24462C32.6377 3.06691 33.0709 3.00868 33.4932 3.07731C33.9155 3.14594 34.308 3.33834 34.6209 3.63016C34.9338 3.92197 35.1531 4.30007 35.2511 4.71659C35.349 5.13311 35.3211 5.56932 35.171 5.96998C35.0208 6.37065 34.7552 6.71776 34.4076 6.96737C34.0601 7.21697 33.6463 7.35785 33.2187 7.37216H33.139C32.8736 7.38896 32.6074 7.35319 32.3559 7.2669C32.1043 7.18062 31.8723 7.04551 31.673 6.86934C31.4738 6.69317 31.3113 6.4794 31.1949 6.24028C31.0785 6.00117 31.0105 5.74143 30.9947 5.47596C30.9873 5.41422 30.9843 5.35204 30.9858 5.28988ZM30.9858 9.2152H35.3187V24.8279H31.0035L30.9858 9.2152Z" fill="white" />
                                        <path d="M14.6562 3.49121H28.355V7.27476H19.4942V12.9191H26.5119V16.5608H19.4854V24.8279H14.6562V3.49121Z" fill="white" />
                                        <path d="M6.38861 10.4734C6.38861 11.8114 6.38861 13.4418 4.54557 14.1063C6.43291 14.7532 6.38861 16.1266 6.38861 17.562V22.8785C6.38861 23.8886 6.7962 24.5 7.52279 24.6506C7.68244 24.7045 7.85064 24.7285 8.01899 24.7215H9.79114V28.2658H6.86709C3.7481 28.2658 2.02911 26.4937 2.02911 23.2063V16.9152C2.00699 16.5922 1.86458 16.2893 1.63 16.0662C1.39541 15.8431 1.08571 15.716 0.762025 15.7101H0V12.6H0.762025C1.09216 12.5956 1.40796 12.4644 1.64388 12.2334C1.87981 12.0024 2.01776 11.6895 2.02911 11.3595V4.97975C2.02911 1.74557 3.71266 0 6.86709 0H9.81772V3.49114H8.04557C7.87702 3.49163 7.70958 3.51854 7.54937 3.57089C6.82278 3.75696 6.41519 4.35949 6.41519 5.34304L6.38861 10.4734Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_8557_664">
                                            <rect width="140" height="28.3544" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </NavLink>
                        )}
                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item">
                                    <NavLink className="header__link" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink className="header__link" to="/blog">
                                        Blog
                                    </NavLink>
                                </li>
                                <li className="header__item">
                                    <NavLink className="header__link" to="/aboutUs">
                                        About us
                                    </NavLink>
                                </li>
                                {isAuth ? null : (
                                    <li className="header__item">
                                        <NavLink className="header__link" to="/register">
                                            Register
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                            <div>
                                {isAuth ? (
                                    <NavLink to="/account" className="header__loginPage">
                                        Account
                                    </NavLink>
                                ) : (
                                    <NavLink to="/login" className="header__loginPage">
                                        Login
                                    </NavLink>
                                )}
                            </div>
                        </nav>

                        <div className="togle__menu" onClick={togleOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                                <rect width="20" height="3" fill="white" />
                                <rect y="7" width="20" height="3" fill="white" />
                                <rect y="14" width="20" height="3" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </header>

            <div className={togle ? "shadow" : ""}></div>

            <div className={`togle ${togle ? "show" : ""}`}>
                <div className="togle__list">
                    <div className="togle__close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" onClick={togleClose}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.99989 6.37869L2.98948 0.368286L0.868164 2.48961L6.87857 8.50001L0.868164 14.5104L2.98948 16.6317L8.99989 10.6213L15.0103 16.6317L17.1316 14.5104L11.1212 8.50001L17.1316 2.48961L15.0103 0.368286L8.99989 6.37869Z" fill="white" />
                        </svg>
                    </div>
                    <NavLink className="togle__link" to="/" onClick={togleClose}>
                        Home
                    </NavLink>
                    <NavLink className="togle__link" to="/blog" onClick={togleClose}>
                        Blog
                    </NavLink>
                    <NavLink className="togle__link" to="/aboutUs" onClick={togleClose}>
                        About us
                    </NavLink>
                    {isAuth ? null : (
                        <NavLink className="togle__link" to="/register" onClick={togleClose}>
                            Register
                        </NavLink>
                    )}
                    {isAuth ? (
                        <NavLink className="togle__link" style={{ backgroundColor: "var(lyt-txt-clr)" }} to="/account" onClick={togleClose}>
                            Account
                        </NavLink>
                    ) : (
                        <NavLink className="togle__link" style={{ backgroundColor: "var(lyt-txt-clr)" }} to="/login" onClick={togleClose}>
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
