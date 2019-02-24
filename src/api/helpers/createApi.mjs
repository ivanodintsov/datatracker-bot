import R from 'ramda';

const applyStrategy = R.curry((strategy, method) => [ method[0], method[1](strategy) ]);
const applyStrategyToMethods = (applyFn, methods) => R.pipe(
  R.toPairs,
  R.map(applyFn),
  R.fromPairs
)(methods);

const handleMethods = strategy => fn => {
  const applyFn = applyStrategy(strategy);
  const methods = applyStrategyToMethods(applyFn, fn[1]);

  return [ fn[0], methods ];
};

const handleCategory = (strategy, categories) => R.pipe(
  R.toPairs,
  R.map(handleMethods(strategy)),
  R.fromPairs
)(categories);

const api = ({ httpStrategy, defaultOptions }, categories) => {
  if (!R.is(Function, httpStrategy)) {
    throw new Error('HttpStrategy has not been provided');
  }

  const http = httpStrategy(defaultOptions);

  return handleCategory(http, categories);
};

export default api;
