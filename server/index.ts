import express, { Request, Response } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let emergencyRequests = [
  {
    id: 'req-1',
    hospitalName: 'City General Hospital',
    bloodType: 'O-Negative',
    unitsNeeded: 3,
    urgency: 'CRITICAL',
    location: 'Downtown Campus',
    timestamp: new Date().toISOString()
  }
];

app.get('/api/emergency-requests', (req: Request, res: Response) => {
  res.json(emergencyRequests);
});

app.post('/api/emergency-requests', (req: Request, res: Response) => {
  const newRequest = {
    id: `req-${Date.now()}`,
    ...req.body,
    timestamp: new Date().toISOString()
  };
  
  emergencyRequests.unshift(newRequest);
  io.emit('new-emergency-request', newRequest);
  res.status(201).json(newRequest);
});

io.on('connection', (socket) => {
  console.log(`⚡ Client connected: ${socket.id}`);
  socket.on('disconnect', () => {
    console.log(`🔌 Client disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 LifeLink Server running on http://localhost:${PORT}`);
});