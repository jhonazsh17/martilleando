var Martilleando = require('./src/class/Martilleando');

var m = new Martilleando();

const getNow = (stringFormat = null) => m.now(stringFormat);
const getCurrentDay = (date, stringFormat = null) => m.currentDay(date, stringFormat);
const getDateInObject = (date, order = null) => m.dateInObject(date, order);

const month = (date, stringFormat = null) => m.monthNumber(date, stringFormat);
const monthName = (date, stringFormat = null) => m.monthName(date, stringFormat);

module.exports = {
    getCurrentDay,
    getNow,
    getDateInObject,
    month,
    monthName,
};