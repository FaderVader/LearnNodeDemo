const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const response = { name: 'jakob', age: '16', dressed: true}
  // res.send('Hey! It works!');
  // res.json(response);
  // res.send(req.query.name);
  res.render('hello');
});

router.get('/reverse/:name', (req, res) => {
  const reversed = [...req.params.name].reverse().join('');
  res.send(reversed);
});

module.exports = router;
