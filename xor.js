function xor(input1, input2) {
    let result = [];
    for (let i = 0; i < input1.length; i++) {
        if (input1[i] == input2[i]) {
            result[i] = 0;
            continue
        }
        result[i] = 1;

    }
    return result;
}