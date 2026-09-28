let express = require('express');

let router = express.Router();


// RESTAURANT ROUTE

router.get("/", (req, res) => {

    res.send("Restaurant route is working");

});


module.exports = router;