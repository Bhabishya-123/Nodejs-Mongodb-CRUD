const User = require('../../models/User');

// Registering CURD Actions

/**
 * This action returns all users
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.render('index', { users, title: 'Home' });
  } catch (error) {
    next(error);
  }
};

/**
 * This action is for finding user by id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error('Please provide user id');
    const user = await User.findById(id);
    res.render('details', {
      user,
      action: 'edit',
      title: 'User Details',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * This action is for creating User
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    if (user) {
      await user.save();
      res.redirect('/users');
    } else {
      throw new Error('Please fill out all fields');
    }
  } catch (error) {
    next(error);
  }
};

/**
 * This action is for updating user by id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error('Please provide user id');
    const user = await User.updateOne({ _id: req.params.id }, req.body);
    res.redirect('/users');
  } catch (error) {
    next(error);
  }
};

/**
 * This action is for deleting user by id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error('Please provide user id');
    await User.deleteOne({ _id: id });
    res.redirect('/users');
  } catch (error) {
    next(error);
  }
};

// Registering Form View actions

/**
 * This action is for displaying create user form to user
 * @param {*} req
 * @param {*} res
 */
const createUserFormView = (req, res) => {
  res.render('adduser', { title: 'Add-User' });
};

/**
 * This action is for displaying form for editing
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateUserFormView = async (req, res, next) => {
  try {
    const name = req.params.name;
    if (!name) throw new Error('Please provide name');
    const user = await User.findOne({ name: name });
    res.render('edit', { user, title: 'Edit-User' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  createUserFormView,
  updateUserFormView,
};
