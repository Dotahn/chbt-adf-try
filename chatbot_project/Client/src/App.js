import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const res = await axios.get('/api/messages');
    setMessages(res.data);
  };

  const sendMessage = async () => {
    await axios.post('/api/messages', { message: input });
    setInput('');
    getMessages();
  };

  return (
    <div>
      {messages.map((msg, idx) => <p key={idx}>{msg}</p>)}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
