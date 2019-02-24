import R from 'ramda';

const getChatTitle = R.pathOr('Chat', [ 'chat', 'title' ]);

export const chatStatisticsMessage = (msg, data) => `
${getChatTitle(msg)} statistics.

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
