/* This file will contain all of the user-facing 
routes, such as the homepage and login page 
Still needs url */
const router = require('express').Router();

// router.get('/', (req, res) => {
//   res.render('homepage');
// });

router.get('/', (req, res) => {
  res.render('homepage', {
    id: 1,
    post_url: '',
    title: 'Car Review',
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: 'whitelotus32'
    }
  });
});

module.exports = router;

//importing the necessary modules and models
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');