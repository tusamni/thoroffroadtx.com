export function closestNumber(input, limit) {
    const rounded = Math.floor(input / 3) * 3;

    if (rounded > limit) {
        return limit;
    } else {
        return rounded;
    }
}
