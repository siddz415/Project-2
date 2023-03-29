const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    blog_id: 1
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    blog_id: 2
  },
  {
    comment_text: 'Aliquam erat volutpat. In congue.',
    user_id: 3,
    blog_id: 3
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    blog_id: 4
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 7,
    blog_id: 5
  },
  {
    comment_text: 'Vivamus vestibulum sagittis sapien.',
    user_id: 1,
    blog_id: 6
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    blog_id: 9
  },
  {
    comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 7,
    blog_id: 9
  },
  {
    comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 6,
    blog_id: 9
  },

  {
    comment_text: 'Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. A condimentum vitae sapien pellentesque. Sit amet tellus cras adipiscing enim. Tortor vitae purus faucibus ornare suspendisse sed.',
    user_id: 2,
    blog_id: 13
  },

  {
    comment_text: 'Cras semper auctor neque vitae tempus.',
    user_id: 3,
    blog_id: 12
  },

  {
    comment_text: 'Dolor sit amet consectetur adipiscing elit duis.',
    user_id: 4,
    blog_id: 12
  },

  {
    comment_text: 'Metus dictum at tempor commodo ullamcorper.',
    user_id: 5,
    blog_id: 13
  },

  {
    comment_text: 'Consectetur libero id faucibus nisl tincidunt eget nullam.',
    user_id: 6,
    blog_id: 13
  },

  {
    comment_text: 'Dolor sit amet consectetur adipiscing elit duis.',
    user_id: 7,
    blog_id: 12
  },

  {
    comment_text: 'Est ante in nibh mauris cursus mattis.',
    user_id: 5,
    blog_id: 14
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
