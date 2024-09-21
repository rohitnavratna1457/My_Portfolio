import React, { useState } from 'react';
import '../Chatbot/Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", fromBot: true }
    ]);
    const [userInput, setUserInput] = useState("");

    const sendMessage = (text, fromBot = false) => {
        setMessages([...messages, { text, fromBot }]);
        if (fromBot) {
            showNotification("New message from Robo", text);
        }
    };

    const handleUserMessage = () => {
        if (!userInput.trim()) return;  // Prevent sending empty messages

        sendMessage(userInput);
        let botResponse = "";

        // Simple logic to generate different responses
        if (userInput.toLowerCase().includes("information")) {
            botResponse = "Sure! Here is more information about our services.";
        } else if (userInput.toLowerCase().includes("price")) {
            botResponse = "Our pricing varies depending on the package. Can I help you choose the best one?";
        } else if (userInput.toLowerCase().includes("support")) {
            botResponse = "You can reach our support team 24/7 via email or phone.";
        } else {
            botResponse = "I'm sorry, I didn't understand that. Can you please clarify?";
        }

        setTimeout(() => {
            sendMessage(botResponse, true);
        }, 1000);

        setUserInput("");  // Clear the input field after sending
    };

    const showNotification = (title, body) => {
        if (Notification.permission === "granted") {
            new Notification(title, { body });
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, { body });
                }
            });
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <span className="chatbot-title">Robo</span>
            </div>
            <div className="chatbot-body">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.fromBot ? 'from-bot' : 'from-user'}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chatbot-footer">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleUserMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
