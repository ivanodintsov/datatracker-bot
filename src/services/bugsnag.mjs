import bugsnag from 'bugsnag';
import { bugsnagConfig } from '../config';

bugsnag.register(bugsnagConfig.token);

export default bugsnag;
