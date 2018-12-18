function RSADecryption(cipheredtxt, key) {
    if (key.length == 0) {
        alert("Cannot Decrypt without the key");
    } else {
        alphabetics = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
        let originalTxt = [];
        let numericOriginalTxt = [];
        let d = parseInt(key[0]);
        let n = parseInt(key[1]);
        console.log(d, n)
        cipheredtxt.forEach(character => {
            console.log(parseInt(character))
            numericOriginalTxt.push(Math.pow(parseInt(character), d) % n)
        });
        numericOriginalTxt.forEach(character => {
            for (let i = 0; i < alphabetics.length; i++) {
                if (character == i) {
                    originalTxt.push(alphabetics[i]);
                    break;
                }
            }
        })
        console.log(originalTxt);
        return originalTxt.join("")
    }

}