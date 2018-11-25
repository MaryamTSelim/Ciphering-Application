function playFairEditingInput(originalTxt) {
let editedTxt = [];
    originalTxt.split(" ").forEach(word => {
        for (let i = 0; i < word.length; i += 2) {
            if (word[i] == word[i + 1] || word[i + 1] == " ") {
                word = word.slice(0, i + 1) + "x" + word.slice(i + 1, word.length);
            }
            if (i + 1 == word.length) {
                word += "x";
            }
            if (word[i] == "j") {
                word[i] = "i"
            }
            if (word[i + 1] == "j") {
                word[i + 1] = "i"
            }
        }
        editedTxt.push(word);
    });
    return editedTxt.join(" ");
}
