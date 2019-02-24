import { username } from '../config';
import R from 'ramda';

export const findUsername = username => R.find(value => value.username === username);
export const findMyBot = findUsername(username);
