const express = require("express");
const mongoose = require("mongoose");
const QuotesRoute = require('./routes/Quotes')

const app = express();
const PORT = 3333;



//MongoDB atlas uri
const mongoAtlasURI = `mongodb+srv://test_user:Test123@cluster0.i85rhre.mongodb.net/?retryWrites=true&w=majority`;

// Connect to the MongoDB cluster
try {
   mongoose.connect(
      mongoAtlasURI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
   );
} catch (e) {
   console.log("could not connect");
}

const db = mongoose.connection
db.once('open', () => console.log('db is connected'))


//create json object
app.use(express.json());


//routes
app.get("/", (req, res) => {
   res.send("hell world");
});

app.use("/quotes", QuotesRoute);


app.listen(PORT, () => console.log("listening on port", PORT));
  