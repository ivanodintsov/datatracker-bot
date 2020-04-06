import axios from 'axios';
import R from 'ramda';
import createApi from './helpers/createApi';
import { graphql } from '../config';

import * as chat from './chat';
import * as user from './user';
import * as message from './message';
import * as sticker from './sticker';
import graphqlStrategy from './graphqlStrategy.mjs';

class ResponseError extends Error {
  constructor(errors, ...args) {
    super(...args);
    this.errors = errors;

    Error.captureStackTrace(this, ResponseError);
  }
}

const axiosStrategy = defaultOptions => async options => {
  const response = await axios({ ...defaultOptions, ...options });

  const errors = R.path([ 'data', 'errors' ])(response);

  if (errors) {
    throw new ResponseError(errors, 'Response has errors');
  }

  return response;
};

const API = createApi(
  {
    httpStrategy: graphqlStrategy,
    defaultOptions: {
      url: graphql.url,
      method: graphql.method,
      headers: {
        authorization: graphql.token,
      }
    }
  },
  { chat, user, message, sticker }
);

export default API;
