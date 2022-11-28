const router = require('express').Router();

import default from "../../controllers/user-controller";
const {
  getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend,
} = default;

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendsId")
  .post(addFriend)
  .delete(removeFriend);

export default router;