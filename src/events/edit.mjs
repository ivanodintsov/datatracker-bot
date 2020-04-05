import R from 'ramda';
import getMessageData from '../helpers/getMessageData';
import API from '../api';
import getMessageType from '../helpers/getMessageType';
import getStatisticsData from '../helpers/getStatisticsData';
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';

const create = async msg => {
  const messageType = getMessageType(msg);
  if (R.isNil(messageType)) {
    return;
  }

  await API.message.create(msg);
};

export const edit = () => async msg => {
  const msgData = getMessageData(msg);
  const updateData = R.omit([ 'from' ], msgData);

  const updated = await API.message.update(updateData);

  if (updated === 'NOT_UPDATED') {
    return;
  }

  if (updated === 'NOT_EXISTS') {
    await create(msgData);
  }

  const statsData = getStatisticsData(msgData, updated);

  await API.chat.statistics.updateDaily(statsData, R.propOr(null, 'edit_date', msg));
};

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.EDIT,
    msg,
  });
};
