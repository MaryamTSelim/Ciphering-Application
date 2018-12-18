function modifiedDES(originalTxt, key) {
	if (key.length != 8) {
		alert("key is only 8 characters");
		return "";
	} else {
		//Key Generation
		key = key.split("");
		let keyBinary = [];
		key.forEach(character => {
			character = character.charCodeAt(0).toString(2);
			while (character.length != 8) {
				character = "0" + character;
			}
			keyBinary.push(character);

		});
		keyBinary = keyBinary.join("");
		keyBinary = keyModification(keyBinary);
		let roundKeys = keyGenerator(keyBinary);
		//Key Generation is finished

		//Input Modification
		originalTxt = originalTxt.split("");
		//Whether the input is less or more than 8 characters
		//It will make sure its in 8-byte (64-bit) breakable chuncks
		while (originalTxt.length % 8 != 0) {
			originalTxt.push(" ");
		}
		let originalTxtBinary = [];
		originalTxt.forEach(character => {
			character = character.charCodeAt(0).toString(2);
			while (character.length != 8) {
				character = "0" + character;
			}
			originalTxtBinary.push(character);
		});
		originalTxtBinary = originalTxtBinary.join("");
		console.log(originalTxtBinary.length)
		let cihpertxtCharacters = [];
		for (
			let inputRounds = 0; inputRounds < originalTxtBinary.length; inputRounds += 64
		) {
			console.log("inputRounds" + inputRounds)
			let permutedInput = permutationOfInput(
				originalTxtBinary.substring(inputRounds, inputRounds + 64),
				1
			);
			let inputLeft = permutedInput.slice(0, permutedInput.length / 2);
			let inputRight = permutedInput.slice(permutedInput.length / 2);
			for (let rounds = 0; rounds < 16; rounds++) {
				let inputRightExpanded = expandRightInput(inputRight);
				let inputRightXorroundKey = xor(inputRightExpanded, roundKeys[rounds]);
				let rightAfterSBOX = sBox(inputRightXorroundKey, rounds);
				let rightXoredWithLeft = xor(rightAfterSBOX, inputLeft);
				inputLeft = inputRight;
				inputRight = rightXoredWithLeft;
			}
			let output = inputRight.concat(inputLeft);
			cipheredtxt = permutationOfInput(output, 0).join("");
			for (let i = 0; i < cipheredtxt.length; i += 8) {
				cihpertxtCharacters.push(
					String.fromCharCode(toInteger(cipheredtxt.substring(i, i + 8)))
				);
			}
			console.log(cipheredtxt.length)
			console.log(cihpertxtCharacters.length)
		}
		return cihpertxtCharacters.join("");
	}
}