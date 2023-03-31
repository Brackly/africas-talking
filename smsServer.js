const express = require('express');
const sendSMS = require('./sendSMS');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const port = process.env.PORT;

app.listen(port, () => {
        console.log(`App running on port: ${port}`);
    });

app.post("/webhook", async (req, res) => {
    const {text,from} = req.body
    if(!text || !body){
        console.log("the request body is empty")
    }else{
        const response= await sendSMS(req.body.text,req.body.from);
        res.sendStatus(200);
    }
  });