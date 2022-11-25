const { Thought, User } = require('../models');

const thoughtController = {
  //Get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
    .populate({
      path: 'users',
      select: '-__v'
    })
    .select('-__v')
    .sort(({ _id: -1 }))
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

   //Get one thought by id
   getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
    .populate({
      path: 'user',
      select: '-__v'
    })
    .select('-__v')
    .sort({ _id: -1 })
    .then(dbThoughtData => {
      //if no thought found send 404
      if (!dbThoughtData) {
        res.status(404).json({ message: 'This id does not return a Thought!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
    },
  
     // Add a thought to a user
     addThought({ params, body }, res) {
      console.log(body);
      Thought.create(body)
        .then(({ _id }) => {
          return User.findOneAndUpdate(
            { username: body.username },
            { $push: { thoughts: _id } },
            { new: true }
          );
        })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'This id does not return a User!' });
            return;
          }
          res.json(dbUserData);        
        })
        .catch(err => res.json(err));
    },
  
