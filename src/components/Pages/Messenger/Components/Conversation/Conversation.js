import React, { useEffect, useState } from "react";
import "./Conversation.css";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  console.log(conversation);

  console.log(user);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    // ?userId=
    const getUser = async () => {
      try {
        fetch(`http://localhost:4000/api/users/?userId=${friendId}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("conversation data" + data);
            setUser(data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU"
        width="40px"
        alt=""
      />
      <span className="conversationName">{user?.name}</span>
    </div>
  );
};

export default Conversation;
