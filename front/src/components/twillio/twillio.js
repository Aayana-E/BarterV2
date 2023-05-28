const express = require('express');
const twilio = require('twilio');
const cors = require('cors');

const app = express();

app.use(cors());

require('dotenv').config();

app.get('/chat-token', (req, res) => {
    const { identity } = req.query;

    const twilioAccountSid = 'AC9e0e1babb191491bf5378720abcc7a47';
    const twilioApiKey = '5943eaed8392b911b25ec442fab2e347';
    const twilioApiSecret = 'psvmwJTJfB8O7PFlJQM8aKtcDI10hZgb';
    const twilioChatServiceSid = 'SK43e47e65d3a7175d8f751d1267f802bd';

    const AccessToken = twilio.jwt.AccessToken;
    const ChatGrant = AccessToken.ChatGrant;
    const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);
    token.identity = identity;
    
    const chatGrant = new ChatGrant({
        serviceSid: twilioChatServiceSid
    });

    token.addGrant(chatGrant);

    res.json({
        identity: token.identity,
        jwt: token.toJwt()
    });
});

app.listen(3001, () => {
    console.log('Programmable Chat token server started on port 3001');
    console.log('AC9e0e1babb191491bf5378720abcc7a47');
    console.log('5943eaed8392b911b25ec442fab2e347');
    console.log('psvmwJTJfB8O7PFlJQM8aKtcDI10hZgb');
    console.log('SK43e47e65d3a7175d8f751d1267f802bd');
});
