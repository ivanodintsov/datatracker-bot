export default http => async () => {
  const { data: { data: { allChats } } } = await http({
    data: {
      query: `{
        allChats {
          id
        }
      }`
    }
  });

  return allChats;
};
