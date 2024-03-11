import "./header.css";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
    const [openModel, setOpenModel] = useState(false);

    const handleOpen = () => {
        console.log("ModelOpen");
        setOpenModel(!openModel);
    };

    const handleClose = () => {
        console.log("ModelOpen");
        setOpenModel(!openModel);
    };
    return (
        <header className="header_container">
            <div className="header_content">
                <IoMenu size={30} className="menu_icon" onClick={handleOpen} />
                <h1>Front-end developers</h1>
            </div>

            <div
                className={
                    openModel ? "icon_container" : "icon_container-close"
                }
            >
                <IoClose
                    size={25}
                    className="close_icon"
                    onClick={handleClose}
                />
            </div>

            {openModel ? (
                <div className="overlay">
                    <Sidebar />
                </div>
            ) : null}
        </header>
    );
};

export default Header;
