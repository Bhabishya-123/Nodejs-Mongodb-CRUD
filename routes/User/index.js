const express = require('express');
const {
  getUser,
  getUsers,
  createUser,
  createUserFormView,
  updateUser,
  updateUserFormView,
  deleteUser,
} = require('../../controllers/User');
const router = express();

// Registering routes
router.get('/', getUsers);
router.get('/create', createUserFormView);
router.post('/', createUser);
router.get('/:id', getUser);
router.post('/:id/update', updateUser);
router.get('/edit/:name', updateUserFormView);
router.post('/:id/delete', deleteUser);

module.exports = router;
