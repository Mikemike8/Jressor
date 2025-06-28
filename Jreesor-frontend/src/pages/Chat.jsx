import { useEffect, useState } from 'react';

import ChatIcon from "../assets/chaticon.jpg"
import "./Chat.css";

export const Chat = () => {
  // ✅ 1. State to track if chat is open
  const [isChatOpen, setIsChatOpen] = useState(false);

  // ✅ 2. Load Chatbase script once
  useEffect(() => {
  (function () {
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };

      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args) => target(prop, ...args);
        },
      });
    }

    const onLoad = function () {
      // ✅ Check if script already exists!
      if (!document.getElementById("g2FhobLszRRQR3leSt02t")) {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "g2FhobLszRRQR3leSt02t";
        script.domain = "www.chatbase.co";
        document.body.appendChild(script);
      }
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
  })();
}, []); // ✅ dependency array ensures it runs once


  // ✅ 3. Define the toggle
  const toggleChat = () => {
    if (window.chatbase) {
      if (isChatOpen) {
        window.chatbase('close');
      } else {
        window.chatbase('open');
      }
      setIsChatOpen(!isChatOpen);
    }
  };

  return (
    <div>
        
     <button
  onClick={toggleChat}
  style={{
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 9999,
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
  }}
>
  <img
    src={ChatIcon}  // ✅ Replace with your image path
    alt="Chat Toggle"
    style={{
      width: "60px",      // ✅ Adjust size as needed
      height: "60px",
      borderRadius: "50%", // optional: make it round
      boxShadow: "0 2px 6px rgba(0,0,0,0.3)" // optional: nice effect
    }}
  />
</button>


    </div>
  );
};
