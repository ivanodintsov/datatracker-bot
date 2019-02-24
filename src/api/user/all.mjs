export default http => async () => {
  const { data: { data: { allUsers } } } = await http({
    data: {
      query: `{
        allUsers {
          id
        }
      }`
    }
  });

  return allUsers;
};
