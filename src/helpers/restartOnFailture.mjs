import R from 'ramda';
import delay from './delay';

const getServices = R.prop('services');
const getOnSuccess = R.prop('onSuccess');
const getOnFaliture = R.prop('onFailture');
const getMs = R.propOr(5000, 'ms');

const restartOnFailtire = async config => {
  const onSuccess = getOnSuccess(config);
  const onFailture = getOnFaliture(config);

  try {
    const promises = R.map(R.call, getServices(config));
    await Promise.all(promises);

    if (R.is(Function, onSuccess)) {
      await onSuccess();
    }
  } catch (error) {
    const ms = getMs(config);

    if (R.is(Function, onFailture)) {
      await onFailture();
    }

    await delay(ms);

    console.log(`Retry after ${ms}ms.`);

    restartOnFailtire(config);
  }
};

export default restartOnFailtire;
