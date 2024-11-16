const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/route.js');
const corsMiddleware = require('./middleware/cors.middleware.js');

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use('/', routes);
app.use('/add', routes);
app.use('/update', routes);
app.use('/delete', routes);

const start = async () => {
  try {
    mongoose.connect(
      'mongodb+srv://dimadima8054:1234@cluster0.tzamd.mongodb.net/my'
    );

    app.listen(8080, () => {
      console.log('Server started');
    });
  } catch (error) {}
};

start();
