import './Home.css';
import {useState} from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

const apiKey = "AIzaSyC0SlHnXpBVMmpAxKObYdzh5CIa6BXeJoY";
const genAI = new GoogleGenerativeAI(apiKey);

export default function Home() {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSend = async () => {
		if (input.trim() === '') return;

		setIsLoading(true);
		setMessages(prev => [...prev, {role: 'user', content: input}]);
		setInput('');

		try{
			const model = genAI.getGenerativeModel({model: 'gemini-pro'});
			const result = await model.generateContent(input);
			const response = await result.response;
			const text = response.text();

			setMessages(prev => [...prev, {role: 'ai', content: text}]);
		}catch(error){
			console.error("Error generating AI response:", error);
			setMessages(prev => [...prev, {role: 'ai',content: 'Sorry, I encountered an error. Please try again.'}]);
		}finally{
			setIsLoading(false);
		}
	};

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
							{messages.map((message, index) => (
								<div key={index} className='message-box'>
									<h3>{message.role === 'user' ? 'You' : 'AI'}</h3>
									<p>{message.content}</p>
								</div>
							))}
							{isLoading && (
								<div className="message-box">
									<h3>AI</h3>
									<p>Thinking...</p>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='input-section'>
					<input type="text" placeholder="Enter your prompt" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} />
					<input type="button" value="Send" onClick={handleSend} disabled={isLoading} />
				</div>
			 </div>
		</div>
	)
}
