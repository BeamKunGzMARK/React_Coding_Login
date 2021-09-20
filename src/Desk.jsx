import React from "react";
import "./css/desk.css";
import { auth } from "./firebase_service/firebase";
import { signingoogle } from "./firebase_service/firebase";

function Desk({ user }) {
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
                </li>
                <li>
                    <a href="#home">
                        <i
                            className="bx bx-home-alt"
                            style={{ color: "#5e5e5e" }}
                        ></i>

                        <span className="links_name">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#html5">
                        <i
                            className="bx bxl-html5"
                            style={{ color: "#dd4b25" }}
                        ></i>
                        <span className="links_name">HTML5</span>
                    </a>
                </li>
                <li>
                    <a href="#css3">
                        <i
                            className="bx bxl-css3"
                            style={{ color: "#1572b7" }}
                        ></i>
                        <span className="links_name">CSS3</span>
                    </a>
                </li>
                <li>
                    <a href="#javascript">
                        <i
                            className="bx bxl-javascript"
                            style={{ color: "#ffc100" }}
                        ></i>
                        <span className="links_name">JavaScript</span>
                    </a>
                </li>
                <li>
                    <a href="#react">
                        <i
                            className="bx bxl-react bx-spin bx-rotate-180"
                            style={{ color: "#61dafb" }}
                        ></i>
                        <span className="links_name">React</span>
                    </a>
                </li>
                <li>
                    <a href="#nodejs">
                        <i
                            className="bx bxl-nodejs"
                            style={{ color: "#87bf01" }}
                        ></i>
                        <span className="links_name">NodeJS</span>
                    </a>
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
                </li>
                <li>
                    <a href="#jquery">
                        <i
                            className="bx bxl-jquery"
                            style={{ color: "#1e75a8" }}
                        ></i>
                        <span className="links_name">jQuery</span>
                    </a>
                </li>
            </ul>

            <div className="profile_content">
                <div className="profile">
                    <img src={user.photoURL} alt="" />
                    <div className="profile_details">
                        <div className="name_job">
                            <div className="name">
                                <p>{user.displayName}</p>
                            </div>
                            <div className="job">
                                {" "}
                                <p>Developers</p>
                            </div>
                        </div>
                    </div>
                    <i
                        className="bx bx-log-out"
                        onClick={() => auth.signOut()}
                    ></i>
                </div>
            </div>
        </div>
    );
}

export default Desk;
