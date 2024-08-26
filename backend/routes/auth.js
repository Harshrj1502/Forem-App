import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  //  try {
    // const user = await User.findOne({ email });
    // if (user) {
    //   return res.status(400).json({ message: 'User already exists' });
    // }
    // const hashedPassword = await bcrypt.hash(password, 10);
    const { name, email, password } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        name, email, password: hashedpassword
    })
    console.log(user);
    res.render("/logout", { name: user.name })
  //   await user.save();
  //   res.status(201).json({ message: 'User registered successfully' });
  // } catch (err) {
  //   res.status(500).json({ message: 'Server error' });
  // }
});

// Login Route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

export default router;
