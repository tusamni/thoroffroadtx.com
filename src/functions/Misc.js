export function closestNumber(input, divide, limit) {
	const rounded = Math.floor(input / divide) * divide;

	if (rounded > limit) {
		return limit;
	} else {
		return rounded;
	}
}

export function numberBetween(number, min, max) {
	return number >= min && number <= max;
}