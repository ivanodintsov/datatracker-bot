export default http => async ({ name, file_id, ...set }) => {
  await http({
    data: {
      query: `mutation($name: String!, $file_id: String!, $set: StickerUpdateInput!) {
        updateSticker(name: $name, file_id: $file_id, set: $set)
      }`,
      variables: {
        name,
        file_id,
        set
      }
    }
  });
};
