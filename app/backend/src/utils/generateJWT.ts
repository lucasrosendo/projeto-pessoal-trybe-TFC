import jwt = require('jsonwebtoken');
import IUser from '../interfaces/IUser';

const { JWT_SECRET } = process.env;
const jSecret = JWT_SECRET as string;

const generateJWT = (data: IUser) => {
  const token = jwt.sign({ data }, jSecret, {
    expiresIn: '1h',
  });
  return token;
};

export default generateJWT;
