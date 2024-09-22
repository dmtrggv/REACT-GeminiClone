import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = function() {
    const [sbExtended, setSbExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setSbExtended(!sbExtended)} className="menu" src={assets.menu_icon} alt="" />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    { sbExtended ? <p>New Chat</p> : null }
                </div>
                { sbExtended ?
                    <div className="recent">
                        <p className="recent-title">Your recent activity:</p>
                        { prevPrompts.length > 0 ? (
                            prevPrompts.map((item, index) => {
                                return (
                                    <div onClick={() => loadPrompt(item)} className="recent-entry">
                                        <img src={assets.message_icon} alt="" />
                                        <p>{item.slice(0, 18)} ...</p>
                                    </div>
                                )
                            })
                        ) : null }
                    </div>
                : null }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    { sbExtended ? <p>Help</p> : null }
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    { sbExtended ? <p>Activity</p> : null }
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    { sbExtended ? <p>Settings</p> : null }
                </div>
            </div>
        </div>
    )
}

export default Sidebar;