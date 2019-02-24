export default http => async (message, user, chat) => await http({
  data: {
    query: `mutation($message: MessageInput!, $user: UserInput!, $chat: ChatInput!) {
      processMessage(input: $message, user: $user, chat: $chat) {
        _id
      }
    }`,
    variables: {
      message,
      user,
      chat
    }
  }
});
