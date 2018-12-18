window.addEventListener("load", function (e) {
    let originalTxt = document.querySelector("#original textarea");
    let cipheredTxt = document.querySelector("#ciphered textarea");
    let cihperingMethod = document.querySelector("select");
    let key = document.querySelector("input[placeholder='Key']");
    let encBtn = document.querySelector("#enc");
    let decBtn = document.querySelector("#dec");

    encBtn.addEventListener(
        "click",
        function (e) {
            cipheredTxt.value = "";
            if (cihperingMethod.value == "caesarcipher") {
                cipheredTxt.value = caesarCihperEncrypt(originalTxt.value, key.value);
            } else if (cihperingMethod.value == "playfair 1D") {
                cipheredTxt.value = playFair1dEncryption(
                    matrixCreation(key.value),
                    playFairEditingInput(originalTxt.value)
                );
            } else if (cihperingMethod.value == "playfair 1D") {
                cipheredTxt.value = playFair1dEncryption(
                    matrixCreation(key.value),
                    playFairEditingInput(originalTxt.value)
                );
            } else if (cihperingMethod.value == "playfair 2D") {
                cipheredTxt.value = playFair2dEncryption(
                    matrixCreation(key.value),
                    playFairEditingInput(originalTxt.value)
                );
            } else if (cihperingMethod.value == "des") {
                cipheredTxt.value = des(
                    originalTxt.value.split(" ").join(""),
                    key.value.split(" ").join("")
                );
            } else if (cihperingMethod.value == "mdes") {
                cipheredTxt.value = modifiedDES(originalTxt.value, key.value);
            } else if (cihperingMethod.value == "RC4") {
                cipheredTxt.value = RC4Encryption(originalTxt.value, key.value);
            } else if (cihperingMethod.value == "RSA") {
                cipheredTxt.value = RSAEncryption(originalTxt.value, key.value.split(" "));
            }
        },
        false
    );

    decBtn.addEventListener(
        "click",
        function (e) {
            originalTxt.value = "";
            if (cihperingMethod.value == "caesarcipher") {
                originalTxt.value = caesarCihperDecrypt(cipheredTxt.value, key.value);
            } else if (
                cihperingMethod.value == "playfair 1D" ||
                cihperingMethod.value == "playfair 2D"
            ) {
                originalTxt.value = playFairDecryption(
                    matrixCreation(key.value),
                    cipheredTxt.value
                );
            } else if (cihperingMethod.value == "RC4") {
                originalTxt.value = RC4Decryption(
                    cipheredTxt.value.split(" "),
                    key.value
                );
            } else if (cihperingMethod.value == "RSA") {
                originalTxt.value = RSADecryption(
                    cipheredTxt.value.split(" "),
                    key.value.split(" ")
                );
            }
        },
        false
    );
});