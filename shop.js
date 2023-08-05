const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express Shop!</h1>');
});

router.get('/add-product', (req, res, next) => {
    res.send(
        '<form action="/shop/add-product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>'
    );
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router