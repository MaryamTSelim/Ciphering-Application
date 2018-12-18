function RC4Decryption(cipheredTxt, key) {
    let originalTxt = [];
    let S = sCreationAndPermutation(key);
    let K = kGeneration(S);
    for (let i = 0; i < cipheredTxt.length; i++) {
        //K[i] ^ originalTxt.charCodeAt(i)
        originalTxt.push(String.fromCharCode(K[i] ^ cipheredTxt[i]));
    }
    return originalTxt.join("");
}