// serves to collect all the API routes and package them up
const router = require('express').Router();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');


router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);


module.exports = router;