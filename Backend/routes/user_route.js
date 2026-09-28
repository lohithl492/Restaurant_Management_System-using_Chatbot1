let express = require('express');

let router = express.Router();


// USER ROUTE

router.get("/", (req, res) => {

    res.send("User route is working");

});


module.exports = router;