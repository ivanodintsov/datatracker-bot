import { getUserLink } from '../helpers/getFullName';

export const memberStatisticsMessage = (msg, data) => `
📊 ${getUserLink(msg.from)}

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
