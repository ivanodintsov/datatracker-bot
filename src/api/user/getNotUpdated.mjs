export default http => async ({ days, limit }) => {
  const { data: { data: { notUpdatedUsers } } } = await http({
    data: {
      query: `query($days: Int!, $limit: Int!) {
        notUpdatedUsers(days: $days, limit: $limit) {
          id
        }
      }`,
      variables: {
        days,
        limit
      }
    }
  });

  return notUpdatedUsers;
};
