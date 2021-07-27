/**
 * Function: put zero to number less than ten
 * 
 * @param {string} number
 * @return {any} number
 */
const putZero = (number) => {
    if(parseInt(number) < 10)
        return `0${number}`;
    else
        return number;
};

module.exports = {
    putZero
};