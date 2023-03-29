const { Blog } = require('../models');

const postdata = [
  {
    title: 'Checking out Marina Bay Sands!',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Singapore',
    user_id: 1
  },

  {
    title: 'It was so exciting attending the Golden State Warriors game!',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'San Francisco',
    user_id: 6
  },

  {
    title: 'Fun afternoon exploring the UC Berkeley campus.',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Berkeley',
    user_id: 3
  },

  {
    title: 'Doing a full day of sightseeing in Los Angeles.',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Los Angeles',
    user_id: 7
  },

  {
    title: 'Relaxing bike ride across the Golden Gate Bridge.',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'San Francisco',
    user_id: 5
  },

  {
    title: 'Getting some shopping done in Union Square.',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'San Francisco',
    user_id: 2
  },

  {
    title: 'Loved the Griffith Observatory!',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Los Angeles',
    user_id: 4
  },

  {
    title: 'Luxury shopping on Orchard Road.',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'Singapore',
    user_id: 3
  },

  {
    title: 'Went to the SF Giants game!',
    content: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city_location: 'San Francisco',
    user_id: 2
  },

  {
    title: 'Checking out the many bookstores in the city.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget magna fermentum iaculis eu non. Massa enim nec dui nunc mattis enim. Dignissim sodales ut eu sem integer vitae justo eget magna. Sit amet cursus sit amet.',
    city_location: 'Berkeley',
    user_id: 1
  },

  {
    title: 'Cervezas by the beach!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Sed risus ultricies tristique nulla aliquet enim tortor at. Nibh ipsum consequat nisl vel pretium. Arcu bibendum at varius vel pharetra vel.',
    city_location: 'Phuket',
    user_id: 3
  },

  {
    title: 'We went surfing for the first time!',
    content: 'Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Hendrerit gravida rutrum quisque non tellus. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. ',
    city_location: 'Bali',
    user_id: 6
  },

  {
    title: 'Wow, we really enjoyed our fantastic villa!',
    content: 'Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Etiam erat velit scelerisque in dictum non consectetur a. Aenean pharetra magna ac placerat vestibulum lectus mauris. Nulla facilisi morbi tempus iaculis urna. Quis commodo odio aenean sed adipiscing diam donec. Mattis nunc sed blandit libero volutpat. Est ultricies integer quis auctor elit. Commodo elit at imperdiet dui accumsan sit amet nulla. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Posuere ac ut consequat semper. Vestibulum sed arcu non odio.',
    city_location: 'Bali',
    user_id: 7
  },

  {
    title: 'The Robot Restaurant is seriously amazing!',
    content: 'Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. A condimentum vitae sapien pellentesque. Sit amet tellus cras adipiscing enim. Tortor vitae purus faucibus ornare suspendisse sed. Morbi tincidunt augue interdum velit. Nec feugiat nisl pretium fusce. Leo duis ut diam quam nulla porttitor massa id. Cras semper auctor neque vitae tempus. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Dolor sit amet consectetur adipiscing elit duis. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Diam sit amet nisl suscipit adipiscing bibendum. Magnis dis parturient montes nascetur ridiculus mus mauris vitae.',
    city_location: 'Tokyo',
    user_id: 4
  }
];

const seedPosts = () => Blog.bulkCreate(postdata);

module.exports = seedPosts;
