export interface IBootstrapConfig {
  plugin?: MongoosePlugin;
  swagger?: boolean;
  globalPrefix?: string;
}

export interface MongoosePlugin {
  autopopulate?: boolean;
  softDelete?: boolean;
}
