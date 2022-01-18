function checkDateSize(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}
function checkDateOnNegativity(number) {
    if (number < 0) {
        throw TypeError('return exception')
    }
}

function formatDate(date) {
    var dateObject = {
        year: checkDateSize(date.getFullYear()),
        month: checkDateSize(date.getMonth() + 1),
        day: checkDateSize(date.getDate()),
        hours: checkDateSize(date.getHours()),
        minutes: checkDateSize(date.getMinutes()),
    }

    return dateObject.year + '-' + dateObject.month + '-' + dateObject.day + ' ' + dateObject.hours + ':' + dateObject.minutes; // '2017-05-16 13:45'
}



function changeDate(date, number, times) {
    if (times === 'years') {
        date.setFullYear(date.getFullYear() + number);
    } else if (times === 'months') {
        date.setMonth(date.getMonth() + number);
    } else if (times === 'days') {
        date.setDate(date.getDate() + number);
    } else if (times === 'hours') {
        date.setHours(date.getHours() + number);
    } else if (times === 'minutes') {
        date.setMinutes(date.getMinutes() + number);
    } else {
        throw TypeError('there is no such time period')
    }
}

/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    date = new Date(date);

    return {
        get value() {
            return formatDate(date)
        },

        add: function (number, times) {
            checkDateOnNegativity(number);
            changeDate(date, number, times);

            return this;
        },

        subtract: function (number, times) {
            checkDateOnNegativity(number);
            let number_ = - number;
            changeDate(date, number_, times);

            return this;
        }
    }
};
