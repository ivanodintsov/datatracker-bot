export default http => async ({ days, limit }) => {
  const { data: { data: { notUpdatedChats } } } = await http({
    data: {
      query: `query($days: Int!, $limit: Int!) {
        notUpdatedChats(days: $days, limit: $limit) {
          id
        }
      }`,
      variables: {
        days,
        limit
      }
    }
  });

  return notUpdatedChats;
};
