import axios from 'axios';

const chatbotClient = axios.create({
  baseURL: '/chatbot',
});

export default chatbotClient;
