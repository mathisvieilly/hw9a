const moment = require("moment/moment");

console.log(moment().format("dddd, MMMM Do YYYY"));
console.log(moment("19761126", "YYYYMMDD").fromNow());