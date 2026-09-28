let express = require('express');
let mongoose = require('mongoose');

let app = express();

let userroutes = require('./routes/user_route');
let adminroutes = require('./routes/admin_route');
let restaurantroutes = require('./routes/restaurant_route');

app.use(express.json());


// MONGODB CONNECTION

mongoose.connect("mongodb://127.0.0.1:27017/restaurant_management")
.then(() => {

    console.log("MongoDB connected successfully");

})
.catch((err) => {

    console.log("MongoDB connection failed");
    console.log(err);

});


app.use("/api/user", userroutes);

app.use("/api/admin", adminroutes);

app.use("/api/restaurant", restaurantroutes);


app.listen(5000, () => {

    console.log("server is running on port 5000");

});