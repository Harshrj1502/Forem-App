import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/comments')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

const commentSchema = new mongoose.Schema({
  username: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // React frontend URL
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

app.get('/comments', async (req, res) => {
  const comments = await Comment.find().sort({ timestamp: -1 });
  res.json(comments);
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('new-comment', async (data) => {
    const comment = new Comment(data);
    await comment.save();

    io.emit('new-comment', comment); // Broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3001, () => {
  console.log('Server is running on http://localhost:3000');
});
