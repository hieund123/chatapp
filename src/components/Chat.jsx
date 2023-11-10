import React, { useContext } from "react";
import Cam from "../img/cam.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="chat" >
      <div className="chatInfo">
        {data.user && data.user.photoURL && (
          <img className="avatar" src={data.user.photoURL} alt="" />
        )}
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
