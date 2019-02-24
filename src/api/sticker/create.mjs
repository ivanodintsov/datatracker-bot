import R from 'ramda';

export default http => R.curry(async (name, sticker) => {
  const { data: { data: { createSticker } } } = await http({
    data: {
      query: `mutation($name: String!, $sticker: StickerInput!) {
        createSticker(name: $name, sticker: $sticker) {
          type
        }
      }`,
      variables: { name, sticker }
    }
  });

  return createSticker;
});
