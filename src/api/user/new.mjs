export default http => async (id, members_count) => {
  await http({
    data: {
      query: `mutation($id: Float!, $members_count: Int!) {
        newUsers(id: $id, members_count: $members_count) {
          members_count
        }
      }`,
      variables: {
        id,
        members_count
      }
    }
  });
};
