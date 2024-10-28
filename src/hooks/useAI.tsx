import {GoogleGenerativeAI} from '@google/generative-ai';
import {useQuery} from '@tanstack/react-query';

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});

const useAI = (prompt: string) => {
  const generateContent = async () => {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return text;
  };

  return useQuery({
    queryKey: [prompt],
    queryFn: generateContent,
    enabled: false,
  });
};

export default useAI;
