import React from 'react'
import Logo from '../Assets/logofinal.png'
const Chatbot = () => {
  return (
  
    <div>

        <style>
   {
    `
   df-messenger{
    --df-messenger-bot-message: #7ABA78;
    --df-messenger-button-titlebar-color: #1A4D2E;
    
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
></df-messenger>
    </div>
   
  )
}

export default Chatbot
