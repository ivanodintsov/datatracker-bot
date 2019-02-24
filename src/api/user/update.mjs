export default http => async (id, input) => {
  return await http({
    data: {
      query: `mutation($id: Int!, $input: UserUpdateInput!) {
        updateUser(id: $id, input: $input) {
          _id
        }
      }`,
      variables: {
        id,
        input
      }
    }
  });
};
