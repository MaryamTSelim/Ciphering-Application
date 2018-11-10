function playFair1dEncryption(matrix, inputTxt) {
    let cipheredTxt = "";
    for (let i = 0; i < inputTxt.length; i += 2) {
        if(inputTxt[i]== " "){
            i--;
            cipheredTxt += " ";
            continue;
        }
        let firstLetterIndex = matrix.indexOf(inputTxt[i]);
        let secondLetterIndex = matrix.indexOf(inputTxt[i + 1]);
        let firstCipheredIndex;
        let secondCipheredIndex;
        let firstExtractionSet = [];
        let secondExtractionSet = [];
        if (firstLetterIndex % 5 != secondLetterIndex % 5 && parseInt(firstLetterIndex / 5) != parseInt(secondLetterIndex / 5)) {
            //NOT in the same columns or rows
            for (let j = 0; j < 25; j++) {
                //first letter
                if (parseInt(j / 5) == parseInt(firstLetterIndex/5)) {
                    firstExtractionSet.push(j);
                }
                if (j % 5 == secondLetterIndex % 5) {
                    firstExtractionSet.push(j);
                }
                
                if (j % 5 == firstLetterIndex % 5) {
                    secondExtractionSet[secondExtractionSet.length] = j;
                }
                if (parseInt(j / 5) == parseInt(secondLetterIndex/5)) {
                    secondExtractionSet[secondExtractionSet.length] = j;
                }

            }
            
            for (let j = 0; j < firstExtractionSet.length; j++) {
                if (firstExtractionSet[j] == firstExtractionSet[j + 1]) {
                    firstCipheredIndex = firstExtractionSet[j];
                }
                if (secondExtractionSet[j] == secondExtractionSet[j + 1]) {
                    secondCipheredIndex = secondExtractionSet[j];
                }

            }


        } else if (firstLetterIndex % 5 == secondLetterIndex % 5) {
            //In the same columns
            firstCipheredIndex = firstLetterIndex + 5;
            secondCipheredIndex = secondLetterIndex + 5;
            if (firstCipheredIndex >= 25) {
                firstCipheredIndex = firstCipheredIndex % 25;
            }
            if (secondCipheredIndex >= 25) {
                secondCipheredIndex = secondCipheredIndex % 25;
            }

        } else if (parseInt(firstLetterIndex / 5) == parseInt(secondLetterIndex / 5)) {
            //In the same rows
            firstCipheredIndex = firstLetterIndex + 1;
            secondCipheredIndex = secondLetterIndex + 1;
            if (parseInt(firstCipheredIndex / 5) > parseInt(secondCipheredIndex / 5)) {
                firstCipheredIndex = parseInt(secondCipheredIndex / 5) * 5;
            }
            if (parseInt(firstCipheredIndex / 5) < parseInt(secondCipheredIndex / 5)) {
                secondCipheredIndex = parseInt(firstCipheredIndex / 5) * 5;
            }
        }

        cipheredTxt += matrix[firstCipheredIndex] + matrix[secondCipheredIndex];
        console.log(cipheredTxt)
    }
    return cipheredTxt;
};