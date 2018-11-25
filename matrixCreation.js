function matrixCreation(key) {
    let alphabetics = "abcdefghiklmnopqrstuvwxyz";
    if (key.includes("j")) {
        key = key.replace("j", "i")
    }
    for (let i = 0; i < key.length; i++) {
        for (let j = i + 1; j < key.length; j++) {
            if (key[i] == key[j]) {
                key = key.replace(key[j], "");
            }
        }
    }
    key.split("").forEach(letter => {
        alphabetics = alphabetics.replace(letter, "")
    });
    alphabetics = key + alphabetics;
    return alphabetics;
}