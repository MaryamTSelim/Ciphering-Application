function main() {
    let originalTxt = document.querySelector("#original textarea");
    let cipheredTxt = document.querySelector("#ciphered textarea");
    let cihperingMethod = document.querySelector("select");
    let key = document.querySelector("input[placeholder='Key']");
    let encBtn = document.querySelector("#enc");
    let decBtn = document.querySelector("#dec");
    encBtn.addEventListener('click', function (e) {
        e.preventDefault();
        cipheredTxt.value = "";
        if (cihperingMethod.value == "caesercipher") {

            for (let i = 0; i < originalTxt.value.length; i++) {
                if (originalTxt.value.charCodeAt(i) == 32)
                cipheredTxt.value += String.fromCharCode(32)
                else {
                    let ascii = originalTxt.value.charCodeAt(i) + parseInt(key.value);
                    if (ascii > 122)
                        ascii = ascii%122 + 96;
                    cipheredTxt.value += String.fromCharCode(ascii);

                }
            }
        }

    }, false);

    originalTxt.value = "";
    cipheredTxt.value = "";
    key.value = "";
    cihperingMethod.value = "Encryption Method";


}