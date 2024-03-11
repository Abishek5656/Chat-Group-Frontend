import "./sidebar.css";
import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { channelProfile } from "../constant/data.js";
import { useState } from "react";

const Sidebar = () => {
    const [openModel, setOpenModel] = useState(false);

    const handleOpen = () => {
        setOpenModel(true);
    };
    return (
        <div className="sidebar_container">
            {/* sidebar_header */}
            <div>
                <div className="sidebar_header">
                    <h1>Channels</h1>
                    <div className="sidebar_icon">
                        <FaPlus
                            size={14}
                            className="plus_icon"
                            onClick={handleOpen}
                        />
                    </div>
                </div>

                {/* sidebar content */}
                <div className="sidebar_content">
                    <div className="input_container">
                        <IoIosSearch size={24} className="search_icon" />
                        <input type="text" placeholder="search" />
                    </div>

                    {/* sidebar_channel-container */}
                    <div className="sidebar_channel-container">
                        {channelProfile &&
                            channelProfile.map((profile, index) => (
                                <div
                                    className="sidebar_channel-profile"
                                    key={index}
                                >
                                    <div className="profile_display-name">
                                        <h6>{profile.channelDisplayimge}</h6>
                                    </div>
                                    <div>
                                        <p>{profile.channelname}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {openModel ? (
                <div className="boxModel">
                    <h3>New Channel</h3>
                    <input type="text" placeholder="" />
                </div>
            ) : null }
        </div>
    );
};

export default Sidebar;
