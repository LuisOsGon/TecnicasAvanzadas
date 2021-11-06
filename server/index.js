require('dotenv').config();

require("@babel/register")({
    ignore: ["node_modules"]
});

const startApp = require("./app").default;

module.exports = startApp();
