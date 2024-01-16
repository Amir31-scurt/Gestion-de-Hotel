const express = require('express');
const connectDB = require('../backend/config/db');
const dotenv = require('dotenv').config();
const port = 5000;

//  Connexion to the Database
connectDB();

const app = express();

// Middleware configuration to treat requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/post', require('./routes/post.routes'));
//  Run the server
app.listen(port, () => console.log('listening on port ' + port));
process.on('unhandledRejection', (err) => {
  console.error(`An unhandled rejection: ${err.message}`);
  process.exit(1); // Exit process with failure
});
