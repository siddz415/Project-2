// exports an object with format_date and format_plural helper functions for Handlebars templates
module.exports = {
  eq: (a, b) => a == b,
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
};
