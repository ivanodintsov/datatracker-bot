import R from 'ramda';
import { statsSiteUrl } from '../config.mjs';

const getChatId = R.pathOr('', ['chat', 'id']);
const getUserId = R.pathOr('', ['from', 'id']);
export const memberLinkMessage = (msg) => `${statsSiteUrl}/chats/${getChatId(msg)}/members/${getUserId(msg)}`;
