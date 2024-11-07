// contexts/InterAppMessaging.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Message {
  from: 'App 1' | 'App 2';
  message: string;
}

interface InterAppMessagingContextValue {
  messages: Message[];
  sendMessage: (from: 'App 1' | 'App 2', message: string) => void;
}

const InterAppMessagingContext = createContext<InterAppMessagingContextValue | undefined>(
  undefined
);

interface InterAppMessagingProviderProps {
  children: ReactNode;
}

export const InterAppMessagingProvider: React.FC<InterAppMessagingProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (from: 'App 1' | 'App 2', message: string) => {
    setMessages((prevMessages) => [...prevMessages, { from, message }]);
    console.log(`Sending "${message}" from ${from} to the other app`);
  };

  return (
    <InterAppMessagingContext.Provider value={{ messages, sendMessage }}>
      {children}
    </InterAppMessagingContext.Provider>
  );
};

export const useInterAppMessaging = () => {
  const context = useContext(InterAppMessagingContext);
  if (!context) {
    throw new Error(
      'useInterAppMessaging must be used within an InterAppMessagingProvider'
    );
  }
  return context;
};