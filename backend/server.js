const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

app.use(express.json());

app.use('/api/workouts', workoutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('listening on post 4000');
    });
  })
  .catch((error) => console.log(error));
