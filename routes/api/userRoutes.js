const express = require('express')
const router = express.Router()
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router;

// create user needs username, email

// add friend needs friend's userId

// [
// 	{
// 		"_id": "637d6c51b9a25eb2baa573a2",
// 		"username": "First User",
// 		"email": "user1@email.com",
// 		"thoughts": [],
// 		"friends": [],
// 		"__v": 0,
// 		"friendCount": 0
// 	},
// 	{
// 		"_id": "637d6c63b9a25eb2baa573a5",
// 		"username": "Second User",
// 		"email": "user2@email.com",
// 		"thoughts": [],
// 		"friends": [],
// 		"__v": 0,
// 		"friendCount": 0
// 	},
// 	{
// 		"_id": "637d6c6bb9a25eb2baa573a7",
// 		"username": "Third User",
// 		"email": "user3@email.com",
// 		"thoughts": [],
// 		"friends": [],
// 		"__v": 0,
// 		"friendCount": 0
// 	},
// 	{
// 		"_id": "637d6c7fb9a25eb2baa573aa",
// 		"username": "Fourth User",
// 		"email": "user4@email.com",
// 		"thoughts": [],
// 		"friends": [],
// 		"__v": 0,
// 		"friendCount": 0
// 	}
// ]