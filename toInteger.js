function toInteger(binary) {
    let result = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[binary.length - 1 - i] == 1) {
            result += Math.pow(2, i);
        }
    }
    return result;
}