import { Request, Response, NextFunction } from 'express';
import {
  incrementRequestCount,
  observeRequestDuration
} from '../metrics/httpMetrics.js';

export const metricsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();

  res.on('finish', () => {
    const durationSec = (Date.now() - start) / 1000;
    const route = req.route ? req.route.path : req.originalUrl;

    incrementRequestCount(req.method, route, res.statusCode.toString());
    observeRequestDuration(
      req.method,
      route,
      res.statusCode.toString(),
      durationSec
    );
  });

  next();
};
