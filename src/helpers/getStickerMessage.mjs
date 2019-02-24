import R from 'ramda';

const stickerLens = R.lensProp('sticker');
const getSticker = R.view(stickerLens);
const setSticker = R.set(stickerLens);

const getStickerMessage = R.ifElse(
  getSticker,
  R.pipe(getSticker, R.pick([ 'file_id', 'set_name' ]), setSticker(R.__, {})),
  R.always({})
);

export default getStickerMessage;
