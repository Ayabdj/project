import React from "react";
import logo from "/src/assets/logoo.png";
import avatar from "../../../public/avatar.jpg";
import UserGreeting from "./UserGreeting";

function Header() {
  const user = {
    avatar: avatar,
  };

  const notifications = [
    { name: "Venti", avatar: avatar, action: "vous a proposé un devis", time: "12:12", type: "proposition", isRead: false },
    { name: "Lilou", avatar: avatar, action: "a demandé un devis", time: "10:20", type: "demande", isRead: true },
    // { name: "Venti", avatar: avatar, action: "vous a proposé un devis", time: "12:12", type: "proposition", isRead: true },
    // { name: "Lilou", avatar: avatar, action: "a demandé un devis", time: "10:20", isRead: true },
  ];

  const messages = [
    { idSender: 1, name: "Venti", avatar: avatar, text: "Lorem Ipsum...", isRead: true, time: "2024-12-25 15:45" },
    { idSender: 2, name: "Lilou", avatar: avatar, text: "Je viens de sortir", isRead: false, time: "2024-12-25 16:05" },
    { idSender: 1, name: "Venti", avatar: avatar, text: "Un autre message", isRead: false, time: "2024-12-26 16:15" },
    { idSender: 2, name: "Lilou", avatar: avatar, text: "Je vais arriver dans 10 minutes", isRead: false, time: "2024-12-26 17:00" },
  ];
  
  

  const isSignedUp = true;
  const isJoined = true;

  return (
    <header>
      <div className="py-3 px-0 fixed z-50 w-full shadow-lg bg-white ">
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
