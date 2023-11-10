import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { format, differenceInMinutes } from "date-fns";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const getMessageTime = () => {
    const messageTime = message.date.toDate();
    const currentTime = new Date();
    const difference = differenceInMinutes(currentTime, messageTime);
    return difference < 1 ? "just now" : format(messageTime, "HH:mm");
  };

  const messageStyle = {
    maxHeight: "200px", // Đặt giới hạn độ dài tối đa của khung chat
    overflowY: "auto",   // Tạo thanh cuộn khi nội dung vượt quá giới hạn
  };

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
      style={messageStyle}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span style={{ fontSize: "11px", color: "gray" }}>
          {getMessageTime()}
        </span>
      </div>
      {message.text && (
        <div className="messageContent">
          <p>{message.text}</p>
        </div>
      )}
      {message.img && (
        <div className="messageContent">
          <img src={message.img} alt="" />
        </div>
      )}
    </div>
  );
};

export default Message;
