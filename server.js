const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHandlebars = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

const sequelize = require('./config/connection');

//sequelize store using express-session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


//configure and link session object with sequelize store
const sess = {
    secret: 'Super secret',
    cookie: {
      // Set the maximum age (in milliseconds) for the session cookie
      maxAge: 900000, // 15 minutes
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
      checkExpirationInterval: 15 * 60 * 1000, // Check for expired sessions every 15 minutes
      expiration: 15 * 60 * 1000, // Expire sessions after 15 minutes
    }),
  };

//middleware, add express-session
app.use(session(sess));

const hbs = expressHandlebars.create({ helpers }); 


app.use(expressCspHeader({
  policies: {
    'default-src': [expressCspHeader.SELF],
    'img-src': [expressCspHeader.SELF],
  }
}));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});