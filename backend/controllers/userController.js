import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error('Please fill all fields');
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
            
        })
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
  
});

// @desc    login user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async(req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({email});
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
  });
  }
  else {
    res.status(400);
    throw new Error('Invalid email or password');
  }
  // Validate user input
  
});

// @desc    Get user profile
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async(req, res) => {
    const {_id, name, email} = await User.findById(req.user._id);
    res.status(200).json({
        id: _id,
        name,
        email
    });
});


//generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export { registerUser,
    loginUser,
    getMe
 }