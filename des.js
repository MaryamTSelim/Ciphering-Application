function des(input, key) {
    let cipheredtxt;
    //Key Generation
    console.log("Generate Key")
    let keyModified = keyModification(key);
    let roundKeys = KeyGenerator(keyModified.join(""));
    console.log("Finished Generation of Key")
    //Initial Of Permutation
    console.log("permuting input")
    let permutedInput = permutationOfInput(input,1);
    console.log("Finished permuting input")
    //Dividing Input
    console.log("Dividing Input")
    let inputLeft = permutedInput.slice(0, (permutedInput.length / 2));
    let inputRight = permutedInput.slice((permutedInput.length / 2));
    console.log("Going into rounds")
    for (let rounds = 0; rounds < 16; rounds++) {
        console.log("Round :" + rounds)
        let inputRightExpanded = expandRightInput(inputRight);
        let inputRightXorroundKey = xor(inputRightExpanded, roundKeys[rounds]);
        console.log("\t" + inputRightExpanded);
        console.log("\t"+roundKeys[rounds].split(""))
        console.log("\t"+inputRightXorroundKey);
        let rightAfterSBOX = sBox(inputRightXorroundKey,rounds);
        let rightXoredWithLeft = xor(rightAfterSBOX,inputLeft);
        inputLeft = inputRight;
        inputRight = rightXoredWithLeft;
    }
    //swap
    let output = inputRight.concat(inputLeft);
    console.log(output)
    cipheredtxt = permutationOfInput(output,0)
    return cipheredtxt.join("");
}