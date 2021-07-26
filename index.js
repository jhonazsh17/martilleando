
var dateInUse = null;

/**
 * Function: Get current day
 * 
 * @param {Date} date
 * @param {String} stringFormat
 * @return {String} dateOutput
 */
const getCurrentDay = (date = null, stringFormat = null) => {
    dateInUse = date;
    let dateOutput = null;

    if(date != null && stringFormat != null) {
        dateOutput = format(stringFormat);
    } else {
        dateOutput = date;
    }    

    return dateOutput;
}

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
    let arrayDate = date.split('/');
    let arrayDateObject = {};

    if(order == 'asc' || order == null) {
        arrayDate.forEach((date, i) => {
            if(i == 0) arrayDateObject['day'] = date;
            else if(i == 1) arrayDateObject['month'] = date;
            else arrayDateObject['year'] = date;
        });
    } else if (order == 'dsc') {
        arrayDate.forEach((date, i) => {
            if(i == 0) arrayDateObject['year'] = arrayDate[i + 2];
            else if(i == 1) arrayDateObject['month'] = arrayDate[i];
            else arrayDateObject['day'] = arrayDate[0];
        });
    }    

    return arrayDateObject;
};

/**
 * Function: Get date with format
 * 
 * @param {String} stringFormat
 * @return {String}
 */
const format = (stringFormat) => {    
    switch(stringFormat){        
        case 'DDMMYYYY':            
            return getDateInObject(dateInUse);
        case 'YYYYMMDD': 
            return getDateInObject(dateInUse, 'dsc');
    }
};

const putZero = (numberCurrent) => {
    if(parseInt(numberCurrent) < 10)
        return `0${numberCurrent}`;
    else
        return numberCurrent;
};

module.exports = {
    getCurrentDay,
    getNow
};