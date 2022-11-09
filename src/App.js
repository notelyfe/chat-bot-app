import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import Config from "./Components/Config";
import MessageParser from "./Components/MessageParser";
import ActionProvider from "./Components/ActionProvider";
import './App.css'

function App() {
  return (
    <div className="App">
      <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;