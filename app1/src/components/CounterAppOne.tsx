// CounterAppOne.tsx
import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const CounterAppOne: React.FC = () => {
  const [messages, setMessages] = useState<{ from: string; message: string }[]>([]);

  const handleSendMessage = () => {
    const newMessage = { from: 'App 1', message: 'Hello from  App 1' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    console.log('Sending message to App 2');
  };

  return (
    <Box>
      <Button onClick={handleSendMessage}>Send Message to App 2</Button>
      {messages.map((message, index) => (
        <Text key={index} color="blue.500">{` ${message.message},${new Date().toLocaleString()}`}</Text>
      ))}
    </Box>
  );
};

export default CounterAppOne;