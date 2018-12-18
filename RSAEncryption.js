function RSAEncryption(originalTxt, key) {
    let cipheredTxt = [];
    let numericOriginalTxt = [];
    if (key == "") {
        alert("A key pair will be generated");
        let keyParams = RSAKeyGeneration();
        let n = keyParams[0];
        let e = keyParams[1];
        let d = keyParams[2];
        alert("Your Public Key is : " + e + " , " + n + "\nYour Private Key is : " + d + " , " + n)
    } else {
        alphabetics = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
        originalTxt.split("").forEach(character => {
            for (let i = 0; i < alphabetics.length; i++) {
                if (character == alphabetics[i]) {
                    numericOriginalTxt.push(i);
                    break;
                }
            }
        });
        let e = parseInt(key[0]);
        let n = parseInt(key[1]);
        console.log("e: " + e);
        console.log("n: " + n)

        numericOriginalTxt.forEach(character => {
            cipheredTxt.push(Math.pow(character, e) % n);
            console.log(cipheredTxt);
        })

    }
    return cipheredTxt.join(" ");
}