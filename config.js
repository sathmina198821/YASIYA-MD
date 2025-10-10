const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~5YhnUKKa#2aUoFfS-K2DgMa6ASqTUsea9LgkS6owY3Gp-3gXmMQs'
};
