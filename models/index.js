const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");
const Picture = require("./Picture");

Blog.hasMany(Picture, {
    foreignKey: "post_id"
});

Picture.belongsTo(Blog, {
    foreignKey: "post_id"
});

User.hasMany(Blog, {
  foreignKey: "user_id",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

module.exports = { User, Blog, Comment , Picture};
