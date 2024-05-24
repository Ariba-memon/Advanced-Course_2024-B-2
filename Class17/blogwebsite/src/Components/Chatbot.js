

import React from 'react';
import Logo from '../Assets/logofinal.png';

const Chatbot = () => {
  return (
    <div className="mx-auto max-w-lg px-4">
      <style>
        {
          `
          df-messenger {
            --df-messenger-bot-message: #7ABA78;
            --df-messenger-button-titlebar-color: #1A4D2E;
            --df-messenger-chat-window-height: 320px;
            --df-messenger-chat-window-offset: 16px;
            --df-messenger-titlebar-title-line-height: normal;
            --df-messenger-send-icon-color-hover: #0b57d0;
          }

          /* Screen ke saath adjust karne ke liye custom CSS */
          @media (min-width: 1025px) {
            df-messenger {
              height: 100vh;
              position: fixed; /* Component ko fixed position mein rakhe */
              top: 0; /* Top boundary adjust karne ke liye */
              left: 0; /* Left boundary adjust karne ke liye */
              right: 0; /* Right boundary adjust karne ke liye */
              z-index: 9999; /* Z-index adjust karne ke liye, tab tak ki website ke saath sahi se adjust ho */
            }
          }
          `
        }
      </style>
      <df-messenger
        intent="WELCOME"
        chat-title="BlogWebsiteagent"
        agent-id="a0679324-5d5a-4596-b88b-4907c46cc8fd"
        language-code="en"
        chat-icon={Logo}
        className="w-full" /* Ensure the component takes up full width */
      ></df-messenger>
    </div>
  );
};

export default Chatbot;