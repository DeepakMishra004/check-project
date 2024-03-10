require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("deepak?? mishra");
});
app.get("/twitter", (req, res) => {
    res.send("twitter");
  });
app.get("/login", (req,res)=>{
    res.send('<h1>Please login at code</h1>');

})
app.get("/youtube",(req,res)=>{
res.send("<h2>youtube channeln page</h2>");
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
