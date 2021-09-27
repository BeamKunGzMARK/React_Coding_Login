import React from "react";
import { signingoogle, auth } from "./firebase_service/firebase";
import "./css/form.css";

function Nodesk({ user }) {
    if (user !== undefined || null) {
        console.log(user);
    }

    window.onload = function () {
        let btn = document.querySelector("#btn");
        let sidebar = document.querySelector(".sidebar");
        let bxs = document.querySelector(".bx-search-alt");

        btn.onclick = function () {
            sidebar.classList.toggle("active");
        };

        bxs.onclick = function () {
            sidebar.classList.toggle("active");
        };
    };

    return (
        <div className="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <i className="bx bxl-dev-to bx-tada bx-rotate-90" />
                    <div className="logo_name">Developer</div>
                </div>
                <i className="bx bx-menu" id="btn"></i>
            </div>

            <ul className="nav_list">
                <li>
                    <a href="#">
                        <i
                            className="bx bx-search-alt"
                            style={{ color: "#5e5e5e" }}
                        ></i>
                        <input type="text" placeholder="Search..." />
                    </a>
                    <span className="tooltip">Search</span>
                </li>
                <li>
                    <a href="#home">
                        <i
                            className="bx bx-home-alt"
                            style={{ color: "#5e5e5e" }}
                        ></i>

                        <span className="links_name">Home</span>
                    </a>
                    <span className="tooltip">Home</span>
                </li>
                <li>
                    <a href="#html5">
                        <i
                            className="bx bxl-html5"
                            style={{ color: "#dd4b25" }}
                        ></i>
                        <span className="links_name">HTML5</span>
                    </a>
                    <span className="tooltip">HTML5</span>
                </li>
                <li>
                    <a href="#css3">
                        <i
                            className="bx bxl-css3"
                            style={{ color: "#1572b7" }}
                        ></i>
                        <span className="links_name">CSS3</span>
                    </a>
                    <span className="tooltip">CSS3</span>
                </li>
                <li>
                    <a href="#javascript">
                        <i
                            className="bx bxl-javascript"
                            style={{ color: "#ffc100" }}
                        ></i>
                        <span className="links_name">JavaScript</span>
                    </a>
                    <span className="tooltip">JavaScript</span>
                </li>
                <li>
                    <a href="#react">
                        <i
                            className="bx bxl-react bx-spin bx-rotate-180"
                            style={{ color: "#61dafb" }}
                        ></i>
                        <span className="links_name">React</span>
                    </a>
                    <span className="tooltip">React</span>
                </li>
                <li>
                    <a href="#nodejs">
                        <i
                            className="bx bxl-nodejs"
                            style={{ color: "#87bf01" }}
                        ></i>
                        <span className="links_name">NodeJS</span>
                    </a>
                    <span className="tooltip">NodeJS</span>
                </li>
                <li>
                    <a href="#vitejs">
                        <i>
                            <img
                                className="bx vitejs"
                                src="https://vitejs.dev/logo.svg"
                            />
                        </i>
                        <span className="links_name">ViteJS</span>
                    </a>
                    <span className="tooltip">ViteJS</span>
                </li>
                <li>
                    <a href="#jquery">
                        <i
                            className="bx bxl-jquery"
                            style={{ color: "#1e75a8" }}
                        ></i>
                        <span className="links_name">jQuery</span>
                    </a>
                    <span className="tooltip">jQuery</span>
                </li>
            </ul>

            <div className="profile_content">
                <div className="profile">
                    <div className="profile_details">
                        {user === (undefined || null) ? (
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2829/2829758.png"
                                alt=""
                            />
                        ) : (
                            <img src={user.photoURL} alt="" />
                        )}
                        <div className="name_job">
                            <div className="name">
                                {user === (undefined || null)
                                    ? "User"
                                    : `${user.displayName}`}
                            </div>
                            <div className="job">Developers</div>
                        </div>
                    </div>

                    {user === (undefined || null) ? (
                        <i
                            className="bx bx-log-in"
                            id="log_in"
                            onClick={signingoogle}
                        ></i>
                    ) : (
                        <i
                            className="bx bx-log-out"
                            id="log_out"
                            onClick={() => auth.signOut()}
                        ></i>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Nodesk;
