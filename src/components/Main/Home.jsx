import './Home.css';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

export default function Home() {
	return (
		<div className="home-main">
			 <div className="header">
				<div className="logo">Luma <MdOutlineArrowDropDown /></div>
				<div className='call-to-action'>
					<div className='pro-action'><FaCrown className='crown-logo'/> Try Luma Pro</div>
					<CgMenuGridO className="menu-dots"/>
				</div>
			 </div>

			 <div className="main-content">
				<div className="main-content-chats">
					<div className="chat-box">
						<div className="chat-box-message">
							<div className="message-box">
								<h3>User</h3>
								<p>Hello, how are you?</p>
							</div>
							<div className="message-box">
								<h3>AI</h3>
								<p>Hello, I am fine. How can I help you?</p>
							</div>
						</div>
					</div>
				</div>
				<div className='input-section'>
					<input type="text" placeholder="Enter your prompt" />
					<input type="button" value="Send" />
				</div>
			 </div>
		</div>
	)
}
