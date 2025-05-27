import client from 'prom-client';

export const metrics = {
  httpRequestCount: new client.Counter({
    name: 'http_request_count',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code']
  }),

  httpRequestDuration: new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'HTTP request duration in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
  })
};

export const incrementRequestCount = (
  method: string,
  route: string,
  statusCode: string
) => {
  metrics.httpRequestCount.inc({ method, route, status_code: statusCode });
};

export const observeRequestDuration = (
  method: string,
  route: string,
  statusCode: string,
  durationSec: number
) => {
  metrics.httpRequestDuration.observe(
    { method, route, status_code: statusCode },
    durationSec
  );
};
