/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {

	var newHours = hours + Math.floor((minutes + interval) / 60);
	var newMinutes = (minutes + interval) % 60;

    if (newHours > 24) {
     newHours  %= 24; 
    }
	if (newHours === 0 && 
        newMinutes === 0 
        && interval === 0) {
		let Newtime = '0' + newHours.toString() + ':' + '0' + newMinutes.toString();
		return Newtime;
	}

   if (newHours >= 0 && newHours <= 24 &&
              newMinutes >= 0 && newMinutes <= 59) {

       if(newHours === 24 &&
            newMinutes.toString().length === 2) {
           let newTime = '00:' + newMinutes.toString();
           return newTime;
          
       } else if (newHours === 24 &&
            newMinutes.toString().length === 1) {
           let newTime = '00:0' + newMinutes.toString();
           return newTime;
       }

     if (newHours.toString().length === 2 &&
             newMinutes.toString().length === 1) {
         let Newtime = newHours.toString() + ':0' + newMinutes.toString();
         return Newtime;
    }

    else if (newHours.toString().length === 1 &&
                 newMinutes.toString().length === 2) {
        return ('0' + newHours + ':' + newMinutes).toString();
    }
        else  if (newHours.toString().length === 1 &&
            newMinutes.toString().length === 1) {
                        return ('0' + newHours + ':0' + newMinutes).toString(); 
    
        }    
        else return (newHours + ':' + newMinutes).toString();

    }
};