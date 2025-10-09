const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~kNgnmCpD#JjEeTAa4fr3ykPhy424q2jvMlk6DV7QeVsi6sh8d1BY'
};
