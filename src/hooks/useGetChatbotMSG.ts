import { useQuery } from '@tanstack/react-query';
import getChatbotMSG from '../api/product/getChatbotMSG';

const useGetChatbotMSG = (msg: string) => {
  return useQuery({
    queryKey: ['getMSG'],
    queryFn: async () => {
      try {
        const chatbotMSG = await getChatbotMSG(msg);
        return chatbotMSG.data;
      } catch (e) {
        return null;
      }
    },
  });
};

export default useGetChatbotMSG;
