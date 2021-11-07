const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model - define the post model 
class Review extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      review_id: body.review_id
    }).then(() => {
      return Review.findOne({
        where: {
          id: body.review_id
        },
        attributes: [
          'id',
          'review_url',
          'title',
          'created_at',
          [
            sequelize.literal('(SELECT COUNT(*) FROM vote WHERE review.id = vote.review_id)'),
            'vote_count'
          ]
        ]
      });
    });
  }
}

// definining columns for POST model ( naming conventions and intiailization)

// create fields/columns for Post model
Review.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      review_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'review'
    }
  );

module.exports = Review;