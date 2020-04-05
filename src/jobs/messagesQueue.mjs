import Queue from 'bull';
import { queues } from '../config'

const messageQueue = new Queue('messages', queues);

export default messageQueue;
