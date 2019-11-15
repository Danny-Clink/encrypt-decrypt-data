const express = require('express');
const router = express.Router();
const Cryptr = require('cryptr');
const secret = 'SecRetKeyValue';
const cipher = new Cryptr(secret);
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res) => {
  const { id, name } = req.body;
  // const encr = cipher.encrypt(JSON.stringify(req.body));
  // const decr = cipher.decrypt(encr)

  const token = jwt.sign(req.body, secret);

  const first = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlRlc3QiLCJpYXQiOjE1NzM3NTg2MjF9.Np7D7uf-fWDU3eEObIHldHksneqluteCIeypITZGBK8'
  
  const second = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlRlc3QiLCJpYXQiOjE1NzM3NTg3MTJ9.yqbDOaazE_R3QwbtWlN_adhZv3cDuuHo1d_apEAn2kw'
  
  try {
    const decodeToken = jwt.verify(first, secret);

    res.send({ "responseCode": 0, data: token, decode: decodeToken });
  } catch (err) {
    if (err) console.log(err);
    res.send({ "responseCode": 1, err: 'Token is not provided'});
    return;
  }
})

module.exports = router;
