/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
 function query(collection) {
	var args = [].slice.call(arguments);
	var argArr = [];

	for (var i = 0; i < args[0].length; ++i) {
		var clone = {};
		for (var keyI in args[0][i]) {
			clone[keyI] = args[0][i][keyI];
		}
		argArr.push(clone);
	}
	
	for (var i = 1; i < args.length; ++i) {
		var arr = args[i].slice();
		var tmpArr = [];

		if (arr[0] === 'filterIn') {
			var property = arr[1][0];
			var values = arr[1][1];
			
			for (var j = 0; j < argArr.length; ++j) {
				if (argArr[j][property] !== undefined) {
					for (var k = 0; k < values.length; ++k) {
						if (argArr[j][property] === values[k]) {
							tmpArr.push(argArr[j]);
						}
					}
				}
			}
			argArr = tmpArr;

		}
	}

	for (var i = 1; i < args.length; ++i) {
		var arr = args[i].slice();

		if (arr[0] === 'select') {
			var fields = arr[1];
			for (var j = 0; j < argArr.length; ++j) {
				var keys = Object.keys(argArr[j]);
				for (var t = 0; t < keys.length; ++t) {
					var key = keys[t];
					var value = argArr[j][key];
					var flag = true;
					for (var k = 0; k < fields.length; ++k) {
						if (argArr[j][fields[k]] !== undefined) {
							if (key !== fields[k]) {
								flag = false;
							} else {
								flag = true;
								break;
							}
						}
					}
					if (flag === false) {
						delete argArr[j][key];
					}
				}
			}

		}
	}

	return argArr;
}

/**
 * @params {String[]}
 */
function select() {
	var fields = [].slice.call(arguments);
	return ['select', fields];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
	var fields = [].slice.call(arguments);
	return ['filterIn', fields];
}

module.exports = {
		query: query,
		select: select,
		filterIn: filterIn
};