import checkPassword from '../middlewares/checkPassword';
import Users from '../database/models/user';
import IUser from '../interfaces/IUser';
import generateJWT from '../utils/generateJWT';

const login = async (user: IUser) => {
  const users = await Users.findAll({
    where: { email: user.email },
  });
  const message = 'Invalid fields';
  if (users && users.length) {
    const hash = users[0].password;
    if (await checkPassword(user.password as string, hash)) {
      const token = generateJWT({
        email: users[0].email,
        role: users[0].role,
      });
      return { token };
    }
    return { message };
  }
  return { message };
};

const userService = {
  login,
};

export default userService;
