/*--------*\
|  Server  |
\*--------*/

// import modules
const { json } = require("express");
let express = require("express");
let mongoose = require("mongoose");

// set up server
const PORT = process.env.PORT || 3000; // PORT
let app = express();
app.use(express.urlencoded({extended: true})); // URL params
app.use(express.json()); // JSON format
app.use(require("./routes/router")); // router module

// set up mongoose
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// run server
app.listen(PORT, function(){
    console.log(`Server active on port ${PORT}`);
})