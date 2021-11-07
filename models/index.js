// import all models
const Vote = require('./Vote');
const Review = require('./Review');
const User = require('./User');


// create associations
User.hasMany(Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Review, {
  through: Vote,
  as: 'voted_reviews',
  foreignKey: 'user_id'
});

Review.belongsToMany(User, {
  through: Vote,
  as: 'voted_reviews',
  foreignKey: 'review_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Review.hasMany(Vote, {
  foreignKey: 'review_id'
});


module.exports = { User, Review, Vote };