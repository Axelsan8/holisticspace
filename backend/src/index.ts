import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app: Express = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'HolisticSpace Backend is running' });
});

// API Routes (to be implemented)
app.get('/api/v1', (req: Request, res: Response) => {
  res.json({ 
    name: 'HolisticSpace API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/v1/auth',
      users: '/api/v1/users',
      videos: '/api/v1/videos',
      services: '/api/v1/services',
      products: '/api/v1/products',
      orders: '/api/v1/orders'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 HolisticSpace Backend running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV}`);
});

export default app;