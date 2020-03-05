const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require("dotenv");




const app = express();
dotenv.config();


/*Adds the react production build to serve react requests*/
app.use(express.static(path.join(__dirname, "/client/build")));
/*React root*/
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());


// const uri = process.env.ATLAS_URI;

// const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tru1:InfiniteLuv1@cluster0-pp7lx.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
// const collection = client.db("test").collection("devices");
  // perform actions on the collection object
//  client.close();
// });

// Connect to MongoDB
mongoose
  .connect(uri,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err))



const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');


app.use('/exercises', exercisesRouter);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
