const express = require('express');
const parser = require('body-parser');
const app = express();
const notesController = require('./controllers/notes.js');
const usersController = require('./controllers/users.js');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use('/', (req, res) => {
	res.redirect('/notes');
});

app.use('/notes', notesController);
app.use('/users', usersController);

app.listen(3000, () => console.log('app is running'));

// DO NOT REMOVE THIS LINE:
module.exports = app;
