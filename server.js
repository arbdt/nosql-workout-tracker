// import modules
let express = require("express");
let mongoose = require("mongoose");

// set up server
const PORT = process.env.PORT || 3000;
let app = express();

// set up mongoose
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// run server
app.listen(PORT, function(){
    console.log(`Server active on port ${PORT}`);
})