import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ChatComponent() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    fetchChatHistory();
  }, []);

  const fetchChatHistory = async () => {
    const response = await axios.get('http://localhost:5000/api/messages');
    setChatHistory(response.data.messages);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/messages', { message });
    setMessage("");
    setChatHistory([...chatHistory, { user: "You", message }, { user: "Bot", message: response# Let's check the most recent versions of the libraries to be added
search('sqlalchemy latest version')

  
}

export default ChatComponent;

