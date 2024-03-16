// Components/Chatbot.tsx

import React, { useState } from 'react';
import './Chatbot.css';
import logo from "./Assets/robot_head.png"

const Chatbot: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userInput.trim()) return;
    const newHistory = [...chatHistory, `You: ${userInput}`, `Bot: Echoing - ${userInput}`];
    setChatHistory(newHistory);
    setUserInput(''); // Clear input after sending
  };

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div className="chatbot-container-wrapper">
      {isChatOpen && (
        <div className={`chatbot-container ${isChatOpen ? 'open' : ''}`}>
          <div className="chatbot-header">
            <span> Recipe Chatbot</span>
            <button onClick={toggleChat} className="chatbot-close-btn">&times;</button>
          </div>
          <ul className="chatbot-messages">
            {chatHistory.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="chatbot-footer">
            <input
              type="text"
              className="chatbot-input"
              onChange={handleInputChange}
              value={userInput}
              placeholder="Write your message here"
            />
            <button type="submit" className="chatbot-send-btn">
              Send
            </button>
          </form>
        </div>
      )}
      <button className="chatbot-toggle" onClick={toggleChat}>
        <img src={logo} alt="Chatbot Icon" className="chatbot-icon" />
      </button>
    </div>
  );
}

export default Chatbot;
