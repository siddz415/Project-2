const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userdata = [
  {
    username: 'Doc',
    password: 'root'
  },
  {
    username: 'Happy',
    password: 'root'
  },
  {
    username: 'Grumpy',
    password: 'root'
  },
  {
    username: 'Sleepy',
    password: 'root'
  },
  {
    username: 'Dopey',
    password: 'root'
  },
  {
    username: 'Bashful',
    password: 'root'
  },
  {
    username: 'Sneezy',
    password: 'root'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
