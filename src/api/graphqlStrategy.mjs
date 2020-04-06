import R from 'ramda';
import ApolloClient from 'apollo-client';
import InMemoryCache from 'apollo-cache-inmemory';
import HttpLink from 'apollo-link-http';
import fetch from 'node-fetch';
import gql from 'graphql-tag';

class ResponseError extends Error {
  constructor(errors, ...args) {
    super(...args);
    this.errors = errors;

    Error.captureStackTrace(this, ResponseError);
  }
}

const graphqlStrategy = defaultOptions => {
  const cache = new InMemoryCache.InMemoryCache();

  const httpLink = new HttpLink.HttpLink({
    uri: defaultOptions.url,
    fetch,
    headers: defaultOptions.headers,
  });

  const client = new ApolloClient.ApolloClient({
    cache: cache,
    link: httpLink,
    queryDeduplication: false,
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });

  const mutation = (data) => {
    return client.mutate({
      mutation: gql`${data.query}`,
      variables: data.variables,
    });
  };

  const query = (data) => {
    return client.query({
      query: gql`${data.query}`,
      variables: data.variables,
    });
  };

  const processMethod = async (options) => {
    const queryString = R.pathOr('', ['data', 'query'], options);
    const isMutation = R.startsWith('mutation', queryString);
    const data = R.pathOr('', ['data'], options);

    let method = query;

    if (isMutation) {
      method = mutation;
    }

    const response = await method(data);

    return {
      data: response,
    };
  };

  return async options => {
    const response = await processMethod(options);

    const errors = R.path([ 'data', 'errors' ])(response);

    if (errors) {
      throw new ResponseError(errors, 'Response has errors');
    }

    return response;
  };
};

export default graphqlStrategy;
