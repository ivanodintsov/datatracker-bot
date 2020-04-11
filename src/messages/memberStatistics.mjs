import R from 'ramda';
import { getUserLink } from '../helpers/getFullName';

const REPUTATION_TYPES = {
  POSITIVE: {
    emoji: '👍',
  },
  NEGATIVE: {
    emoji: '👎',
  },
  NEUTRAL: {
    emoji: '👌',
  },
};
const getReputationType = (countInput) => {
  const count = parseInt(countInput, 10);

  if (count > 0) {
    return REPUTATION_TYPES.POSITIVE;
  }

  if (count < 0) {
    return REPUTATION_TYPES.NEGATIVE;
  }

  return REPUTATION_TYPES.NEUTRAL;
};

const getReputation = (msg) => {
  let total = R.pathOr(0, ['reputation', 'total'], msg);

  if (R.anyPass([R.isNil, Number.isNaN])(total)) {
    total = 0;
  }

  const reputationType = getReputationType(total);

  return `${reputationType.emoji} Reputation: ${total}`;
  
};  

export const memberStatisticsMessage = (msg, data) => `
📊 ${getUserLink(msg.from)}

${getReputation(data)}

📜 Text: ${data.text}
🎤 Voice: ${data.voice}
📹 Video note: ${data.video_note}
📼 Video: ${data.video}
🌅 Sticker: ${data.sticker}
📌 Pinned: ${data.pinned}
🎧 Audio: ${data.audio}
📄 Document: ${data.document}
📷 Photo: ${data.photo}
🧔 Contact: ${data.contact}
📍 Location: ${data.location}
🎮 Game: ${data.game}
↩️ Reply: ${data.reply}
⏩ Forward: ${data.forward}
✏️ Edit: ${data.edit}
`;
