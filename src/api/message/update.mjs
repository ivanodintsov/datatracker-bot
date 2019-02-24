export default http => async ({ chat, message_id, edit_date, ...input }) => {
  const { data: { data: { updateMessage } } } =  await http({
    data: {
      query: `mutation($chat: Float!, $message_id: Int!, $input: MessageUpdateInput!, $edit_date: String!) {
        updateMessage(
          chat: $chat,
          message_id: $message_id,
          edit_date: $edit_date,
          input: $input
        )
      }`,
      variables: {
        chat,
        edit_date,
        message_id,
        input
      }
    }
  });

  return updateMessage;
};
