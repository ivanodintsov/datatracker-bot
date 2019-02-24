export default http => async id => {
  await http({
    data: {
      query: `mutation($id: Float!) {
        leftUser(id: $id) {
          members_count
        }
      }`,
      variables: {
        id
      }
    }
  });
};
