const Users = [{ email: 'ricardopp1992@gmail.com', id: 1 }, { email: 'divirgiliocamila@outlook.com.ar', id: 2 }];

function validateSocialMediaUser(
  token: string,
  refreshToken: string,
  email: string,
  name: string,
) {
  /** Find user on the database if not exist create an account */
  const userExist = Users.find(u => u.email === email);
  return userExist.id;
}

export default validateSocialMediaUser;