const express = require('express');
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser
} = require('../controllers/userController');

const router = express.Router();

// User routes
router.route('/')
  .get(getUsers)        // Get all users
  .post(createUser);    // Create new user

router.route('/:id')
  .put(updateUser)      // Update user
  .delete(deleteUser);  // Delete user

// Login route
router.post('/login', loginUser);

module.exports = router;
