export default http => async ({ name, file_id }) => {
  const { data: { data: { findSticker } } } = await http({
    data: {
      query: `query($name: String!, $file_id: String!) {
        findSticker(name: $name, file_id: $file_id) {
          file_id
        }
      }`,
      variables: {
        name,
        file_id
      }
    }
  });

  return findSticker;
};
