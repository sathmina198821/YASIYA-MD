const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~0RQ3UB4b#sygVGxj37RmBz4zosZaDjAPLWbcKW9YYxExZnyQ9qF0'
};
