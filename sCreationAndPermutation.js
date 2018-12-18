function sCreationAndPermutation(key) {
    let S = [];
    for (let i = 0; i <= 255; i++) {
        S[i] = i;
    }
    let j = 0;
    for (let i = 0; i <= 255; i++) {
        j = (j + S[i] + key.charCodeAt(i % key.length)) % 256;
        let temp = S[i];
        S[i] = S[j];
        S[j] = temp;
    }
    return S;
}