export default http => async (chatId, userId) => {
  const { data: { data: { chatMemberStatistics } } } = await http({
    data: {
      query: `query($chatId: Float!, $userId: Int!) {
        chatMemberStatistics(chat: $chatId, user: $userId) {
          text
          voice
          video_note
          video
          sticker
          pinned
          audio
          document
          photo
          reply
          forward
          edit
          contact
          location
          game
        }
      }`,
      variables: { chatId, userId }
    }
  });

  return chatMemberStatistics;
};
