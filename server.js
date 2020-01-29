const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')


require('dotenv').config();

const app = express();
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


const uri = process.env.ATLAS_URI;

// Connect to MongoDB
mongoose
  .connect(
    uri,
    { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true}
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
  app.use(express.static( 'client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  })
}


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
