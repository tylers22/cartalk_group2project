/* This file will contain all of the user-facing 
routes, such as the homepage and login page 
Still needs url */
const router = require('express').Router();
//importing the necessary modules and models
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// router.get('/', (req, res) => {
//   res.render('homepage');
// });

//move the review to a different page and restructure homepage
router.get('/', (req, res) => {
  console.log(req.session);
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

/* Route renders login */
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render('login');
});

/* Route renders single post forum */
router.get('/post/:id', (req, res) => {
  const post = {
    id: 1,
    post_url: 'https://handlebarsjs.com/guide/',
    title: 'Handlebars Docs',
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: 'test_user'
    }
  };

  res.render('single-post', { post });
});

module.exports = router;