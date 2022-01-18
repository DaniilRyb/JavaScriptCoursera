/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    if(hours < 0 || hours > 23){
        return false;
    }
    else if(minutes < 0 || minutes > 59){
        return false; 
    }
    else{
        return true;
    }

};
