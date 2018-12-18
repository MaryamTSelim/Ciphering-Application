function kGeneration(S) {
    let K = [];
    let j = 0;
    for (let i = 0; i <= 255; i++) {
        i = (i + 1) % 256;
        j = (j + S[i]) % 256;
        let temp = S[i];
        S[i] = S[j];
        S[j] = temp;
        K[i] = S[(S[i] + S[j]) % 256];
    }
    return K;
}