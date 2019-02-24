export default http => async ({ days, limit }) => {
  const { data: { data: { notUpdatedChatMembers } } } = await http({
    data: {
      query: `query($days: Int!, $limit: Int!) {
        notUpdatedChatMembers(days: $days, limit: $limit) {
          chat
          user
        }
      }`,
      variables: {
        days,
        limit
      }
    }
  });

  return notUpdatedChatMembers;
};
