function caesarCihperEncrypt(originalTxt, key) {
    let cipheredTxt = "";
    for (let i = 0; i < originalTxt.length; i++) {
        if (originalTxt.charCodeAt(i) == 32)
            cipheredTxt += String.fromCharCode(32)
        else {
            let ascii = originalTxt.charCodeAt(i) + parseInt(key);
            if (originalTxt.charCodeAt(i) >= 97 && originalTxt.charCodeAt(i) <= 122) {
                if (ascii > 122)
                    ascii = ascii % 122 + 96;
                cipheredTxt += String.fromCharCode(ascii);
            } else if (originalTxt.charCodeAt(i) >= 65 && originalTxt.charCodeAt(i) <= 90) {
                if (ascii > 122)
                    ascii = ascii % 90 + 65;
                cipheredTxt += String.fromCharCode(ascii);
            }
        }
    }
    return cipheredTxt;
}