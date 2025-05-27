import express from 'express';
import dotenv from 'dotenv';
import { register } from './metrics/register.js';
import { metricsMiddleware } from './middleware/httpMetrics.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(metricsMiddleware);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/metrics', async (_req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (error) {
    console.error('Failed to fetch metrics:', error);
    res.status(500).end();
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
