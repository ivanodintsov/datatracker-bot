import getId from '../helpers/getId';

export default http => async user => {
  const { data: { data: { createUser } } } = await http({
    data: {
      query: `mutation($user: UserInput!) {
        createUser(input: $user) {
          _id
        }
      }`,
      variables: {
        user
      }
    }
  });

  return getId(createUser);
};
