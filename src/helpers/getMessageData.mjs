import R from 'ramda';
import getBaseMessageData from './getBaseMessageData';
import getStickerMessage from './getStickerMessage';
import moment from 'moment-timezone';

const ifNil = R.ifElse(R.isNil);
const emptyObj = R.always({});
const ifNilObj = ifNil(emptyObj);
const getId = R.prop('id');
const getChat = R.prop('chat');
const getChatId = R.pipe(
  getChat,
  getId
);

const getChatIdObj = R.pipe(
  getChatId,
  ifNilObj(R.assoc('chat', R.__, {}))
);

const getFrom = R.prop('from');
const getFromId = R.pipe(
  getFrom,
  getId
);
const getFromIdObj = R.pipe(
  getFromId,
  ifNilObj(R.assoc('from', R.__, {}))
);
const getReplyToMessageId = R.pipe(
  R.path([ 'reply_to_message', 'message_id' ]),
  ifNilObj(R.assoc('reply_to_message', R.__, {}))
);

const _getJSDate = date => moment.unix(date).toDate();
const getJSDate = ifNil(R.identity, _getJSDate);
const _getDate = p => R.pipe(
  R.prop(p),
  getJSDate
);
const _getDateObj = p => R.pipe(
  _getDate(p),
  ifNilObj(R.assoc(p, R.__, {}))
);

const getDateObj = _getDateObj('date');
const getEditDateObj = _getDateObj('edit_date');
const getForwardDateObj = _getDateObj('forward_date');

const setNotNil = prop => ifNilObj(R.assoc(prop, R.__, {}));
const getForwardFrom = R.prop('forward_from');
const getForwardFromIdObj = R.pipe(getForwardFrom, getId, setNotNil('forward_from'));

const getForwardFromChat = R.prop('forward_from_chat');
const getForwardFromChatIdObj = R.pipe(getForwardFromChat, getId, setNotNil('forward_from_chat'));

const _getForwardData = R.pipe(
  R.juxt([
    getForwardDateObj,
    getForwardFromIdObj,
    getForwardFromChatIdObj
  ]),
  R.mergeAll
);

const getForwardData = R.ifElse(
  R.has('forward_date'),
  _getForwardData,
  emptyObj
);

const getMessageId = R.prop('message_id');
const getPinnedMessage = R.prop('pinned_message');
const getPinnedMessageIdObj = R.pipe(getPinnedMessage, getMessageId, setNotNil('pinned_message'));

const getMessageData = R.pipe(
  R.juxt([
    getBaseMessageData,
    getChatIdObj,
    getFromIdObj,
    getDateObj,
    getEditDateObj,
    getForwardData,
    getReplyToMessageId,
    getStickerMessage,
    getPinnedMessageIdObj
  ]),
  R.mergeAll
);

export default getMessageData;
