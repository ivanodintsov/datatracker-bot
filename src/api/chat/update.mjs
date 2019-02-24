export default http => async (id, input) => {
  await http({
    data: {
      query: `mutation($id: Float!, $input: ChatUpdateInput!) {
        updateChat(id: $id, input: $input) {
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
