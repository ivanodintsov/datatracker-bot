import R from 'ramda';

const generateUserLink = ({ username, id }) => `[${username}](tg://user?id=${id})`;
const fullName = data => {
  const name = R.propOr('', R.__, data);
  const username = R.trim(`${name('first_name')} ${name('last_name')}`);
  return generateUserLink({...data, username});
};

export const memberStatisticsMessage = (msg, data) => `
${fullName(msg.from)} statistics.

Text: ${data.text}
Voice: ${data.voice}
Video note: ${data.video_note}
Video: ${data.video}
Sticker: ${data.sticker}
Pinned: ${data.pinned}
Audio: ${data.audio}
Document: ${data.document}
Photo: ${data.photo}
Contact: ${data.contact}
Location: ${data.location}
Game: ${data.game}
Reply: ${data.reply}
Forward: ${data.forward}
Edit: ${data.edit}
`;
