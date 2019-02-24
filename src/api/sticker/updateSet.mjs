export default http => async ({ name, ...set }) => {
  await http({
    data: {
      query: `mutation($name: String!, $set: StickerSetUpdateInput!) {
        updateStickerSet(name: $name, set: $set)
      }`,
      variables: {
        name,
        set
      }
    }
  });
};
