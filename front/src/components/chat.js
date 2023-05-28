import React, { useEffect, useState, useRef } from 'react';
import * as TwilioChat from 'twilio-chat';
import LoggedIn from './LoggedIn';

const Chat = () => {
    const [client, setClient] = useState(null);
    const [channel, setChannel] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3001/chat-token?identity=yourIdentity') // replace yourIdentity with desired identity
            .then(response => {
              if (!response.ok) {
                return response.text().then(text => {
                  throw new Error(`Error fetching token: ${text}`);
                });
              }
              return response.json();
            })
            .then(data => {
                return TwilioChat.Client.create(data.jwt);
            })
            .then(chatClient => {
                setClient(chatClient);
                return chatClient.getChannelByUniqueName('general');
            })
            .then(chatChannel => {
                setChannel(chatChannel);
                return chatChannel.join();
            })
            .then(chatChannel => {
                chatChannel.on('messageAdded', message => {
                    setMessages(messages => [...messages, message]);
                });

                return chatChannel.getMessages();
            })
            .then(messagePage => {
                setMessages(messagePage.items);
            })
            .catch(error => {
                console.error('Error creating or joining channel: ', error);
            });
    }, []);

    const sendMessage = () => {
        if (newMessage.trim() === '' || !channel) return;

        channel.sendMessage(newMessage);
        setNewMessage("");
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    return (
        <div>
            <br/>
            <div>
                {messages.map((message, i) => (
                    <div key={i}>
                         <p><b>{message.author}</b>: {message.body}</p>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div>
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
