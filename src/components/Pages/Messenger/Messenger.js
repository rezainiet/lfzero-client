import { useEffect, useRef } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Conversation from "./Components/Conversation/Conversation";
import Message from "./Components/Message/Message";
import "./Messenger.css";

// import Conversation from "../../components/conversations/Conversation";
// import Message from "../../components/message/Message";
// import ChatOnline from "../../components/chatOnline/ChatOnline";
import { io } from "socket.io-client";

export default function Messenger() {
  const [logginUser] = useAuthState(auth);
  console.log(logginUser);
  //   console.log(logginUser.email);
  const email = logginUser.email;
  //   console.log(email);
  const [conversations, setConversations] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  // const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    fetch(`http://localhost:4000/api/users/getUserByEmail/${email}`)
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, [currentUser]);

  console.log(currentUser._id);

  // get conversation

  useEffect(() => {
    fetch(`http://localhost:4000/api/conversation/${currentUser._id}`)
      .then((res) => res.json())
      .then((data) => setConversations(data));
  }, [currentUser._id]);

  console.log(currentChat);
  useEffect(() => {
    const getMessages = async () => {
      try {
        fetch("http://localhost:4000/api/message/" + currentChat?._id)
          .then((res) => res.json())
          .then((data) => setMessages(data));
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: currentUser._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== currentUser._id
    );

    socket.current.emit("sendMessage", {
      senderId: currentUser._id,
      receiverId,
      text: newMessage,
    });

    try {
      fetch("http://localhost:4000/api/message/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(message),
      })
        .then((res) => res.json())
        .then((data) => setMessages([...messages, data]));
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", currentUser._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        currentUser.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [currentUser]);

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={currentUser} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === currentUser._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            {/* <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
