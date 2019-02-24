export default http => async () => {
  const { data: { data: { allMembers } } } = await http({
    data: {
      query: `{
        allMembers {
          chat
          user
        }
      }`
    }
  });

  return allMembers;
};
