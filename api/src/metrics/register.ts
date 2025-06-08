import client from 'prom-client';
import { metrics } from './httpMetrics';

export const register = new client.Registry();
client.collectDefaultMetrics({ register });

const registerAllMetrics = () => {
  Object.values(metrics).forEach((metric) => {
    register.registerMetric(metric);
  });
};

registerAllMetrics();
