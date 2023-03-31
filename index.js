const smsServer = require('./smsServer');
const express = require('express');
const sendSMS = require('./sendSMS');
const axios =require('axios')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


const port = process.env.PORT;

app.listen(port, () => {
        console.log(`App running on port: ${port}`);
    });

app.post("/webhook", async (req, res) => {
    const {text,from} = req.body
    res.sendStatus(200);
});
// TODO: Call sendSMS function


// TODO: Call start sms server
