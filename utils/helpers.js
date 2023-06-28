const handlebars = require('handlebars');

// Define the isEqual helper
handlebars.registerHelper('isEqual', function (value1, value2, options) {
  if (value1 === value2) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
// const template = handlebars.compile(yourTemplateString);
// const html = template(yourData);