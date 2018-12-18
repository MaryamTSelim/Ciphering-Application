function RC4Encryption(originalTxt, key) {
    let cipherTxt = [];
    let S = sCreationAndPermutation(key);
    let K = kGeneration(S);
    for (let i = 0; i < originalTxt.length; i++) {
        cipherTxt.push(K[i] ^ originalTxt.charCodeAt(i));
    }
    return cipherTxt.join(" ")
}