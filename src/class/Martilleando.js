const {putZero} = require('../functions');

class Martilleando {

    dateInUse = null;
    formatsAsc = ['DDMMYYYY', 'DMY', 'dmy'];
    formatsDsc = ['YYYYMMDD', 'YMD', 'ymd'];

    months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    shortMonths = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    constructor(){}

    /**
     * Function: Get date with format
     * 
     * @param {string} stringFormat
     * @return {string}
     */
    format = (stringFormat) => {  
        var f = stringFormat;      
        var result = null;

        if(this.formatsAsc.find( format => format == f ) != null) return this.formattedDate();    
        if(this.formatsDsc.find( format => format == f ) != null) return this.formattedDate('dsc');
    }

    /**
     * Function: Get date with format
     * 
     * @param {String} order
     * @return {String}
     */
    formattedDate = (order = null) => {
        const {day, month, year} = this.dateInObject(this.dateInUse, order); 

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
    currentDay = (date, stringFormat = null) => {
        this.dateInUse = date;
        let dateOutput = null;

        if(date != null && stringFormat != null) {
            dateOutput = this.format(stringFormat);
        } else if(date != null && stringFormat == null) {
            dateOutput = this.format('DMY');
        } else {
            return `The date parameter is required.`;
        } 

        return dateOutput;    
    }
    
    /**
     * Function: Get date in object
     * 
     * @param {Date} date
     * @return {object} arrayDateObject
     */
    dateInObject(date, order = null){
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

    /**
     * Function: Get date of now
     * 
     * @param {String} stringFormat
     * @return {String} 
     */
    now = (stringFormat = null) => {
        var date = new Date();
        let dateString = `${putZero(date.getDate())}/${putZero(date.getMonth() + 1)}/${date.getFullYear()}`;
        this.dateInUse = dateString;

        if(stringFormat == null || stringFormat == 'DDMMYYYY'){   
            return this.format('DDMMYYYY');
        } else {
            return this.format(stringFormat);
        }
    }

    monthNumber = (date, stringFormat = null) => {
        if(stringFormat == null){
            const {month} = this.dateInObject(date);
            return month;
        } else {
            const {month} = this.dateInObject(date, 'dsc');
            return month;
        }
    }

    monthName = (date, length = null, stringFormat = null) => {
        let monthCurrent = null;

        if(stringFormat == null){
            const {month} = this.dateInObject(date);
            monthCurrent = month;
        } else {
            const {month} = this.dateInObject(date, 'dsc');
            monthCurrent = month;
        }
        
        return ( length == 'long' || length == null ) ? (
            this.months[parseInt(monthCurrent) - 1] 
        ) : (
            this.shortMonths[parseInt(monthCurrent) - 1]
        );
    }

}

module.exports = Martilleando;