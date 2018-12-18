function keyModification(key) {
    let keyModified = key.substring(0, 7).concat(key.substring(8, 15).concat(key.substring(16, 23).concat(key.substring(24, 31).concat(key.substring(32, 39).concat(key.substring(40, 47).concat(key.substring(48, 55).concat(key.substring(56, 63))))))));

    let d0 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36];
    let c0 = [63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
    let applyD0 = [];
    let applyC0 = [];
    for (let i = 0; i < 56; i++) {
        applyD0[i] = keyModified[d0[i] - 1];
        applyC0[i] = keyModified[c0[i] - 1];
    }
    let keyCompress = [14, 17, 11, 24, 01, 05, 03, 28, 15, 06, 21, 10, 23, 19, 12, 04, 26, 8, 16, 07, 27, 20, 13, 02, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
    keyModified = [];
    let keyModified56 = applyD0.concat(applyD0);
    for (let i = 0; i < keyCompress.length; i++) {
        keyModified[i] = keyModified56[keyCompress[i] - 1];
    }
    return keyModified.join("");
}