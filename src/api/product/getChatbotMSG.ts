import chatbotClient from '../client/chatbotClient';

const getChatbotMSG = (msg: string) => {
  const url = `chatbot/${msg}`;
  const response = chatbotClient.get(url);
  return response;
};

export default getChatbotMSG;
