const express = require('express');
const router = express.Router();
const Note = require('../models/Note.js');

router.get('/', (req, res) => {
	Note.find({})
		.then((allNotes) => {
			res.json(allNotes);
		})
		.catch((err) => console.error(err));
});

router.get('/:id', (req, res) => {
	Note.findOne({ _id: req.params.id })
		.then((note) => {
			res.json(note);
		})
		.catch((err) => console.error(err));
});

module.exports = router;
