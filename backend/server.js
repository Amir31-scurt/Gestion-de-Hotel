const express = require('express');
const connectDB = require('../backend/config/db');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;
const authRoutes = require('../backend/routes/authRoutes');

//  Connexion to the Database
connectDB();

const app = express();

// Middleware configuration to treat requests
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/post', require('./routes/post.routes'));
app.use('/api', authRoutes);
//  Run the server
app.listen(port, () =>
  console.log('Server started, listening on port ' + port)
);
process.on('unhandledRejection', (err) => {
  console.error(`An unhandled rejection: ${err.message}`);
  process.exit(1); // Exit process with failure
});
