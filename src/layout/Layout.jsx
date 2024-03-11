import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Main from "../components/Main/Main";
import "./layout.css";

const Layout = () => {
    return (
        <div className="layout_container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main_Container">
                <div className="header">
                    <Header />
                </div>

                <Main />
            </div>
        </div>
    );
};

export default Layout;
