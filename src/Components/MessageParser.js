import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

    message = message.toLowerCase()

    let badwords = ["fuck", "bad", "stupid", "useless", "bitch", "crazy", "nonsense"];

    let welcome = ["hi", "hello", "hey", "sup", "yo", "wassup", "whats up", "howdy", "greetings", "good morning", "good afternoon", "good evening"];

    let bye = ["by", "bye", "goodbye", "see you later", "cya", "goodnight", "goodbye"]

    let thanks = [ "thanks", "thank you", "thank you very much"];

    let how = ["how are you", "how are you doing", "how are you doing today", "how are you doing today"];

    let help = ["need help", "i need help", "i am stuck"]

    let response = ["i'm fine", "i am fine", "i am fine today", "i'm fine", "i'm great", "i'm fine", "i'm great", "i'm good", "great"];

    let nameAsk = [ "what's your name", "what is your name"];

    let ageAsk = [ "what's your age", "what is your age", "how old are you"];

    if (badwords.includes(message)) {
      message = "Please do not use bad words";
      actions.addBotMessage(message)
    }
    if (welcome.includes(message)) {
      message = "Hello! How may i help you?";
      actions.addBotMessage(message)
    }
    if (bye.includes(message)) {
      message = "Pleasure to help you, have a nice day";
      actions.addBotMessage(message)
    }
    if (thanks.includes(message)) {
      message = "You are welcome";
      actions.addBotMessage(message)
    }
    if (how.includes(message)) {
      message = "I am fine, thank you";
      actions.addBotMessage(message)
    }
    if (response.includes(message)) {
      message = "That is good";
      actions.addBotMessage(message)
    }
    if (nameAsk.includes(message)) {
      message = "My name is Bot";
      actions.addBotMessage(message)
    }
    if (ageAsk.includes(message)) {
      message = "I don't know about my age";
      actions.addBotMessage(message)
    }
    if (help.includes(message)) {
      message = "Ok i will help you please be relax";
      actions.addBotMessage(message)
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;