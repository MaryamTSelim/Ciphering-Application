function caesarCihperDecrypt(cipheredTxt, key) {
    let originalTxt = "";
    for (let i = 0; i < cipheredTxt.length; i++) {
        if (cipheredTxt.charCodeAt(i) == 32)
            originalTxt += String.fromCharCode(32)
        else {
            let ascii = cipheredTxt.charCodeAt(i) - parseInt(key);
            if (cipheredTxt.charCodeAt(i) >= 97 && cipheredTxt.charCodeAt(i) <= 122) {
                if (ascii < 97) {
                    ascii = 123 + (ascii - 97);
                }
            } else if (cipheredTxt.charCodeAt(i) >= 65 && cipheredTxt.charCodeAt(i) <= 90) {
                if (ascii < 65) {
                    ascii = 91 + (ascii - 65);
                }
            }
            originalTxt += String.fromCharCode(ascii);
            console.log(ascii)
        }
    }
    return originalTxt;
}