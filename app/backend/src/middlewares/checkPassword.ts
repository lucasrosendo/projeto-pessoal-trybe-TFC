import { compare } from 'bcryptjs';

const checkPassword = async (text: string, hash: string) => {
  const isCorrect = await compare(text, hash);
  return isCorrect;
};

export default checkPassword;
