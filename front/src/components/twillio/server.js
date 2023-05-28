const express = require('express');
const twilio = require('twilio');
const cors = require('cors');

const app = express();

app.use(cors()); // CORS should come before your routes

app.get('/chat-token', (req, res) => {
    const identity = req.query.identity;

    const accessToken = new twilio.jwt.AccessToken(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_API_KEY,
        process.env.TWILIO_API_SECRET,
    );

    accessToken.identity = identity;

    const chatGrant = new twilio.jwt.AccessToken.ChatGrant({
        serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
    });

    accessToken.addGrant(chatGrant);

    res.send({
        identity: identity,
        jwt: accessToken.toJwt(),
    });
});

app.listen(3001, () => {
    console.log('Programmable Chat token server started on port 3001');
});
