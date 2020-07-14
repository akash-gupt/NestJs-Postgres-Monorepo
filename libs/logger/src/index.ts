import { Signale } from 'signale';
import config from './config';

/**
 * To see more go here {@link https://github.com/klaussinani/signale}
 */
export const GypsyLogger = new Signale(config.options);
GypsyLogger.config(config.config);
