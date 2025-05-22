//incialization
require('dotenv').config();
const express = require('express');
const createRoutes = require('./src/routes/index');//directory of routes
const session = require('express-session'); // session middleware
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
//configure session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

createRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});