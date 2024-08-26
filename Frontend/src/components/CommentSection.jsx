import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:4000');

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/comments')
      .then((response) => {
        setComments(response.data);
      });

    socket.on('new-comment', (comment) => {
      setComments((prevComments) => [comment, ...prevComments]);
    });

    return () => {
      socket.off('new-comment');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = { username, message };
    socket.emit('new-comment', newComment);

    setUsername('');
    setMessage('');
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded p-2 mr-2 w-1/4"
          required
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded p-2 mr-2 w-1/2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="border-b pb-2">
            <div className="font-bold">{comment.username}</div>
            <div>{comment.message}</div>
            <div className="text-sm text-gray-500">{new Date(comment.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
