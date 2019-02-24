export default http => async users => {
  const { data: { data: { createUsers } } } = await http({
    data: {
      query: `mutation($users: [UserInput]!) {
        createUsers(input: $users) {
          _id
        }
      }`,
      variables: {
        users
      }
    }
  });

  return createUsers;
};
