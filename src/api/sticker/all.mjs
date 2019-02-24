export default http => async () => {
  const { data: { data: { allStickerSets } } } = await http({
    data: {
      query: `{
        allStickerSets {
          name,
          stickers {
            file_id
            file
          }
        }
      }`
    }
  });

  return allStickerSets;
};
