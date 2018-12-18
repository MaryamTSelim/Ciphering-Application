function playFairDecryption(matrix, cipherTxt) {
    let originalTxt = [];
    let matrix2D = [];
    //2D key Generator
    for (let i = 0; i < matrix.length; i += 5) {
        matrix2D.push(matrix.substring(i, i + 5).split(""))
    }
    cipherTxt.split(" ").forEach(cipheredWord => {
        let originalWord = "";
        for (let i = 0; i < cipheredWord.length; i += 2) {
            let firstLetterX;
            let firstLetterY;
            let secondLetterX;
            let secondLetterY;
            //Find Coordination of Two Letters
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    if (cipheredWord[i] == matrix2D[row][col]) {
                        firstLetterX = row;
                        firstLetterY = col;
                    }
                    if (cipheredWord[i + 1] == matrix2D[row][col]) {
                        secondLetterX = row;
                        secondLetterY = col;
                    }
                }
            }
            if (firstLetterX == secondLetterX) {
                //Two Letters in the same row
                --firstLetterY;
                --secondLetterY;
                if (firstLetterY < 0) {
                    firstLetterY += 5;
                }
                if (firstLetterY < 0) {
                    firstLetterY += 5;
                }
                originalWord += matrix2D[firstLetterX][firstLetterY] + matrix2D[secondLetterX][secondLetterY];
            } else if (firstLetterY == secondLetterY) {
                //Two Letters in the same column
                --firstLetterX;
                --secondLetterX;
                if (firstLetterX < 0) {
                    firstLetterX += 5;
                }
                if (firstLetterX < 0) {
                    firstLetterX += 5;
                }
                originalWord += matrix2D[firstLetterX][firstLetterY] + matrix2D[secondLetterX][secondLetterY];
            } else {
                originalWord += matrix2D[firstLetterX][secondLetterY] + matrix2D[secondLetterX][firstLetterY];
            }


        }
        originalTxt.push(originalWord)
    });
    return originalTxt.join(" ");
}