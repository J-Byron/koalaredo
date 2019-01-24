const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const kolaRouter = require('./routers/koala.router.js');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');


/** ---------- MIDDLEWARE ---------- */
app.use(bodyParser.json());
app.use(express.static('build'));

/** MONGOOSE CONNECTION */
// Connect MongoDB
const databaseUrl = 'mongodb://localhost:27017/koalastore';
mongoose.connect(databaseUrl, {useNewUrlParser : true })

mongoose.connection.once('connected', () => {
  console.log('mongoose connected to ', databaseUrl);
});

mongoose.connection.on('error', (error) => {
  console.log('mongoose connection error ', error);
});

/** ------- EXPRESS ROUTES --------- **/
app.use('/employees', kolaRouter);

/** --------- START SERVER ----------- */
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});