import React from "react";
import logo from "/src/assets/logoo.png";
import avatar from "../../../public/avatar.jpg";
import UserGreeting from "./UserGreeting";

function Header() {
  const user = {
    avatar: avatar,
  };

  const notifications = [
    // { name: "Venti", avatar: avatar, action: "vous a proposé un devis", time: "12:12", type: "proposition", isRead: false },
    // { name: "Lilou", avatar: avatar, action: "a demandé un devis", time: "10:20", type: "demande", isRead: true },
    // { name: "Venti", avatar: avatar, action: "vous a proposé un devis", time: "12:12", type: "proposition", isRead: true },
    // { name: "Lilou", avatar: avatar, action: "a demandé un devis", time: "10:20", isRead: true },
  ];

  const messages = [
    { name: "Venti", avatar: avatar, text: "Lorem Ipsum is simply dummy text...", isRead: false, time: "15:45" },
    { name: "Lilou", avatar: avatar, text: "Je viens de sortir, je vous préviens...", isRead: true, time: "16:05" },
    { name: "Lilou", avatar: avatar, text: "Je viens de sortir, je vous préviens...", isRead: true, time: "16:05" },
    { name: "Lilou", avatar: avatar, text: "Je viens de sortir, je vous préviens...", isRead: true, time: "16:05" },
    { name: "Lilou", avatar: avatar, text: "Je viens de sortir, je vous préviens...", isRead: true, time: "16:05" },
  ];

  const isSignedUp = true;
  const isJoined = true;

  return (
    <header>
      <div className="py-3 px-0 fixed z-50 w-full shadow-lg bg-white">
        <div className="px-10 mx-auto flex justify-between items-center">
          <a href="/">
            <img src={logo} alt="logo-img" className="object-contain w-[120px]" />
          </a>
          <UserGreeting
            isSignedUp={isSignedUp}
            isJoined={isJoined}
            user={user}
            notifications={notifications}
            messages={messages}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
