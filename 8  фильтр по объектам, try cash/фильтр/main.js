'use strict';

function filterByType(typeArg, ...args) {
	return args.filter(function(arrayArgs) {
		if(typeof(typeArg) === 'string' ||
			typeof(typeArg) === 'boolean') {
			return typeof(typeArg) === typeof(arrayArgs)
		}
		
		if(typeof(typeArg) === 'object') {
			if(typeArg === null) {
				return typeArg === arrayArgs
			}
			
			if(Array.isArray(typeArg)) {
				return Array.isArray(typeArg) === Array.isArray(arrayArgs)
			}
			
			return typeof(typeArg) === typeof(arrayArgs || !null) && !Array.isArray(arrayArgs)
		}
		
		if(isNaN(typeArg)) {
			return typeof(typeArg) === typeof(arrayArgs && !'number')
		} else {
			return typeof(typeArg) === typeof(arrayArgs || !NaN)
		}
	})
}

console.log(filterByType({}, NaN, {5: 2}, {}, null, [1, 3, 4], true,
	                       NaN, ['2'], 'dasd', 'string', null, 22));