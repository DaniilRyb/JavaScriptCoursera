/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
let words = tweet.split(' ');
let result = [];
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let IsHaveHashTags = word.split('');

    if (IsHaveHashTags[0] === '#') {
        IsHaveHashTags.splice(0, 1);
        let s = IsHaveHashTags.join('');
    
    result.push(s);
    }
}

return result;

};
