function playFair2dEncryption(matrix, inputTxt) {
    let cipheredTxt = "";
    let matrix2D = [];
    for (let i = 0; i < matrix.length; i += 5) {
        matrix2D.push(matrix.substring(i, i + 5).split(""))
    }
    for (let i = 0; i < inputTxt.length; i += 2) {
        if (inputTxt[i] == " ") {
            i--;
            cipheredTxt += " ";
            continue;
        }
        let firstLetterX;
        let firstLetterY;
        let secondLetterX;
        let secondLetterY;
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (inputTxt[i] == matrix2D[row][col]) {
                    firstLetterX = row;
                    firstLetterY = col;
                }
                if (inputTxt[i + 1] == matrix2D[row][col]) {
                    secondLetterX = row;
                    secondLetterY = col;
                }
            }
        }

        if (firstLetterX == secondLetterX) {
            //Two Letters in the same row
            firstLetterY = (firstLetterY + 1) % 5;
            secondLetterY = (secondLetterY + 1) % 5
            cipheredTxt += matrix2D[firstLetterX][firstLetterY] + matrix2D[secondLetterX][secondLetterY];
        } else if (firstLetterY == secondLetterY) {
            //Two Letters in the same column
            firstLetterX = (firstLetterX + 1) % 5;
            secondLetterX = (secondLetterX + 1) % 5;
            cipheredTxt += matrix2D[firstLetterX][firstLetterY] + matrix2D[secondLetterX][secondLetterY];
        } else {
            cipheredTxt += matrix2D[firstLetterX][secondLetterY] + matrix2D[secondLetterX][firstLetterY];
        }


    }

    return cipheredTxt;
};