export default http => async (id, chat) => {
  const { data: { data: { migrateChat } } } = await http({
    data: {
      query: `mutation($id: Float!, $chat: ChatUpdateInput!) {
        migrateChat(id: $id, input: $chat) {
          _id
        }
      }`,
      variables: { id, chat }
    }
  });

  return migrateChat;
};
