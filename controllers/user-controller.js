const { Thought, User } = require('../models');

const userController = {
    //get all users
    getAllUsers(req, res) {
      User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
    },

    
    //get on user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
          path: 'thoughts',
          select: '-__v'
        })
        .populate({
          path: 'friends',
          select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
          // send 404 if no user found
          if (!dbUserData) {
            res.status(404).json({ message: 'This id does not return a User!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
      },