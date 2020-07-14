import { Signale } from 'signale';
import config from './config';

const logger = new Signale(config.options);
logger.config(config.config);

/**
 * To see more go here {@link https://github.com/klaussinani/signale}
 */
const GypsyLogger = logger;
export { GypsyLogger };
