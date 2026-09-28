let express = require('express');

let router = express.Router();


// ADMIN ROUTE

router.get("/", (req, res) => {

    res.send("Admin route is working");

});


module.exports = router;