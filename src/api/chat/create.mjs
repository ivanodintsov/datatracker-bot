import getId from '../helpers/getId';

export default http => async chat => {
  const { data: { data: { createChat } } } = await http({
    data: {
      query: `mutation($chat: ChatInput!) {
        createChat(input: $chat) {
          _id
        }
      }`,
      variables: {
        chat
      }
    }
  });

  return getId(createChat);
};
