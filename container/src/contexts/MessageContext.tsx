// src/contexts/MessageContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface MessageContextProps {
  messageFromApp1: string;
  messageFromApp2: string;
  sendMessageToApp1: () => void;
  sendMessageToApp2: () => void;
}

const MessageContext = createContext<MessageContextProps | undefined>(undefined);

export const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messageFromApp1, setMessageFromApp1] = useState<string>("");
  const [messageFromApp2, setMessageFromApp2] = useState<string>("");

  const sendMessageToApp1 = () => setMessageFromApp1("Message from App2");
  const sendMessageToApp2 = () => setMessageFromApp2("Message from App1");

  return (
    <MessageContext.Provider
      value={{
        messageFromApp1,
        messageFromApp2,
        sendMessageToApp1,
        sendMessageToApp2,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessageContext must be used within a MessageProvider");
  }
  return context;
};
