import getId from '../helpers/getId';

export default http => async chatId => {
  const { data: { data: { findChatById } } } = await http({
    data: {
      query: `query ($chatId: Float!) {
        findChatById(id: $chatId) {
          _id
        }
      }`,
      variables: { chatId }
    }
  });

  return getId(findChatById);
};
