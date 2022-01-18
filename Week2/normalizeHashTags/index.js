/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
let emptyString = "";
let result = [];
for (let i = 0; i < hashtags.length; i++) {
   let unique = hashtags[i];
   let hash_unique = unique.toLowerCase();

if (!result.includes(hash_unique)) {
    result.push(hash_unique);
  }
  
}
result_ = result.join(', ');
if (result_.length !== 0) {
    return result_;
} else return emptyString;
};
