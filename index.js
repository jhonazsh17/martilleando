const {putZero} = require('./src/functions');

var dateInUse = null;
var formatsAsc = ['DDMMYYYY', 'DMY', 'dmy'];
var formatsDsc = ['YYYYMMDD', 'YMD', 'ymd'];

/**
 * Function: Get date with format
 * 
 * @param {String} stringFormat
 * @return {String}
 */
 const format = (stringFormat) => {  
    var f = stringFormat;      
    var result = null;

    if(formatsAsc.find( format => format == f ) != null) return getFormattedDate();    
    if(formatsDsc.find( format => format == f ) != null) return getFormattedDate('dsc');
};

/**
 * Function: Get date with format
 * 
 * @param {String} order
 * @return {String}
 */
const getFormattedDate = (order = null) => {
    const {day, month, year} = getDateInObject(dateInUse, order); 

    if(order == null || order == 'asc')
        return `${day}/${month}/${year}`;
    else if (order == 'dsc')
        return `${year}/${month}/${day}`;
};

/**
 * Function: Get current day
 * 
 * @param {String} date
 * @param {String} stringFormat
 * @return {String} dateOutput
 */
const getCurrentDay = (date, stringFormat = null) => {
    dateInUse = date;
    let dateOutput = null;

    if(date != null && stringFormat != null) {
        dateOutput = format(stringFormat);
    } else if(date != null && stringFormat == null) {
        dateOutput = format('DMY');
    } else {
        return `The date parameter is required.`;
    } 

    return dateOutput;
}

/**
 * Function: Get date of now
 * 
 * @param {String} stringFormat
 * @return {String} 
 */
const getNow = (stringFormat = null) => {
    var date = new Date();
    let dateString = `${putZero(date.getDate())}/${putZero(date.getMonth() + 1)}/${date.getFullYear()}`;
    dateInUse = dateString;

    if(stringFormat == null || stringFormat == 'DDMMYYYY'){        
        return format('DDMMYYYY');
    } else {
        return format(stringFormat);
    }
}

/**
 * Function: Get date in object
 * 
 * @param {Date} date
 * @return {object} arrayDateObject
 */
const getDateInObject = (date, order = null) => {
    let dateObject = {};
    
    if(date == null) return `The date parameter is required.`;

    let arrayDate = date.split('/');    

    if(order == 'asc' || order == null) {
        arrayDate.forEach((date, i) => {
            if(i == 0) dateObject['day'] = date;
            else if(i == 1) dateObject['month'] = date;
            else dateObject['year'] = date;
        });
    } else if (order == 'dsc') {
        arrayDate.forEach((date, i) => {
            if(i == 0) dateObject['year'] = arrayDate[i + 2];
            else if(i == 1) dateObject['month'] = arrayDate[i];
            else dateObject['day'] = arrayDate[0];
        });
    }    

    return dateObject;
};

module.exports = {
    getCurrentDay,
    getNow,
    getDateInObject
};