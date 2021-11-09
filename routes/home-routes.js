/* Route to homepage */
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