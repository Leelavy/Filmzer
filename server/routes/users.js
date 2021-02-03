const express = require('express');
const userController = require('../controllers/users');
var router = express.Router();

/**
 * Update the review of user id in users table
 http://localhost:8080/users/updateReviewOfUser/:id
 */
router.route('/updateReviewOfUser/:id')
    .patch(userController.updateReviewOfUser);


/**
 * post - create a new user
 * get - get all users
 * http://localhost:8080/users
 */
router.route('/')
    .post(userController.createUser)
    .get(userController.getUsers);


/**
 * Counter of all the users
 * http://localhost:8080/users/countUsers
 */
router.route('/countUsers')
    .get(userController.countUsers);


/**
 * get user by username
 * http://localhost:8080/users/:username
 */
router.route('/getUsername/:username')
    .get(userController.getByUsername)


/**
 * get - get user by user id
 * delete - delete user by user id
 * patch - update user by user id
 * http://localhost:8080/users/:id
 */
router.route('/:id')
    .get(userController.getUserById)
    .delete(userController.deleteUser)
    .patch(userController.updateUser);


module.exports = router;
