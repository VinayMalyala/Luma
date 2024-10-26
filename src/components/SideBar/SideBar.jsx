import "./SideBar.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaGem } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { FaHistory } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";

export default function SideBar() {
    
  return (
    <div className="sidebar">
      <HiMenuAlt3 className="menu-bar" />
      <div className="new-chat">
        <button><FaPlus/> New Chat</button>
      </div>

      <div className="recent-chats">
        <h4>Recent Chats</h4>
        <div className="chat-item">
          <p><FiMessageSquare /> This is a chat</p>
          <p><FiMessageSquare /> This is a chat</p>
          <p><FiMessageSquare /> This is a chat</p>
        </div>
        <a href="#">Show More <IoIosArrowDown /></a>
      </div>

      <div className="footer-section">
        <div className="footer-icons">
          <FaGem/>
          <span>Gem Manager</span>
        </div>

        <div className="footer-icons">
          <FiHelpCircle />
          <span>Help</span>
        </div>

        <div className="footer-icons">
          <FaHistory />
          <span>History</span>
        </div>

        <div className="footer-icons">
          <IoMdSettings />
          <span>Settings</span>
        </div>

      </div>

      <div className="footer-section-2">
        <p>Visakhapatnam, Andhra Pradesh, <br /> India</p>
      </div>
    </div>
  );
}
