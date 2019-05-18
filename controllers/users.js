const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

router.get('/', (req, res) => {
	User.find({})
		.then((allUsers) => {
			res.json(allUsers);
		})
		.catch((err) => console.error(err));
});

router.get('/:id', (req, res) => {
	User.find({ _id: req.params.id })
		.then((user) => {
			res.json(user);
		})
		.catch((err) => console.error(err));
});

module.exports = router;
