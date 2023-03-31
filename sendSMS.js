const AfricasTalking = require('africastalking');
require("dotenv").config();

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: process.env.TOKEN,
  username: process.env.USERNAME
});

module.exports = async function sendSMS(message,number) {
    
    // TODO: Send message
    try {
        const result=await africastalking.SMS.send({
            to: number, 
            message: message,
            from: '10214'
        });
        console.log(result);
    } catch(ex) {
        console.error(ex);
    } 

};