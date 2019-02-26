import R from 'ramda';

const generateUserLink = ({ username, id }) => `[${username}](tg://user?id=${id})`;
export const getFullName = data => {
  const name = R.propOr('', R.__, data);
  return R.trim(`${name('first_name')} ${name('last_name')}`);
};
export const getUserLink = data => {
  const username = getFullName(data);
  return generateUserLink({...data, username});
};
