// CounterAppTwo.tsx
import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const CounterAppTwo: React.FC = () => {
  const [messages, setMessages] = useState<{ from: string; message: string }[]>([]);

  const handleSendMessage = () => {
    const newMessage = { from: 'App 2', message: 'Hello from  App 2' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    console.log('Sending message to App 1');
  };

  return (
    <Box>
      <Button onClick={handleSendMessage}>Send Message to App 1</Button>
      {messages.map((message, index) => (
        <Text key={index} color="green.500">{` ${message.message},${new Date().toLocaleString()}`}</Text>
      ))}
    </Box>
  );
};

export default CounterAppTwo;