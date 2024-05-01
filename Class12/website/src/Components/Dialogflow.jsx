// DialogflowBot.js

import React from 'react';

const DialogflowBot = () => {
  return (
    <div className="bg-blue-500 p-4 rounded-lg shadow-md">
      <df-messenger
        intent="WELCOME"
        chat-title="helloworldAgent"
        agent-id="945f17fa-6b14-4c86-9c1e-56b6de6f9922"
        language-code="en"
        // Add additional props as needed
      ></df-messenger>
    </div>
  );
}

export default DialogflowBot;
