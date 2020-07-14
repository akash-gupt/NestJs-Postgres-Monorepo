import { IBootstrapConfig } from './bootstrap.config';

export const DEFAULT_BOOTSTRAP_CONFIG: IBootstrapConfig = {
  plugin: {
    autopopulate: true,
    softDelete: true,
  },
  swagger: true,
  globalPrefix: 'api',
};
