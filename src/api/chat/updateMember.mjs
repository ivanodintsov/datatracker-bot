export default http => async (chat, user, input) => {
  try {
    return await http({
      data: {
        query: `mutation($chat: Float!, $user: Int!, $input: ChatMemberUpdateInput!) {
          updateChatMember(chat: $chat, user: $user, input: $input) {
            chat
            user
          }
        }`,
        variables: {
          chat,
          user,
          input
        }
      }
    });
  } catch (error) {
    return null;
  }
};
