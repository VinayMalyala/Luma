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
  const handleMenu = () => {
    let sideBar = document.querySelector('#sidebar');
    if (sideBar.classList.contains('sidebar-open')){
      sideBar.classList.remove('sidebar-open');
      sideBar.classList.add('sidebar');
    }else{
      sideBar.classList.add('sidebar-open');
      sideBar.classList.remove('sidebar');
    }
    
  }
    
  return (
    <div className="sidebar-open" id="sidebar">
      <HiMenuAlt3 className="menu-bar" onClick={handleMenu}/>
      <div className="new-chat">
        <button><FaPlus/> New Chat</button>
        <FaPlus className="add-icon" style={{display:'none'}}/>
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
          <FaGem className="icon"/>
          <span>Gem Manager</span>
        </div>

        <div className="footer-icons">
          <FiHelpCircle className="icon" />
          <span>Help</span>
        </div>

        <div className="footer-icons">
          <FaHistory className="icon" />
          <span>History</span>
        </div>

        <div className="footer-icons">
          <IoMdSettings className="icon" />
          <span>Settings</span>
        </div>

      </div>

      <div className="footer-section-2">
        <p>Visakhapatnam, Andhra Pradesh, India</p>
      </div>
    </div>
  );
}
