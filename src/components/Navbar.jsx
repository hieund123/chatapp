import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { Dropdown, Menu } from "antd";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <span>{currentUser.displayName}</span>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="navbar">
      <div className="user">
        <Dropdown className="dropdown" overlay={menu} trigger={["click"]}>
          <img className="avatar" src={currentUser.photoURL} alt="User Avatar" />
        </Dropdown>
      </div>
      <span className="logo">Messenger</span>
    </div>
  );
};

export default Navbar;
