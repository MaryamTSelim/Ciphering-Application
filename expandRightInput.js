function expandRightInput(inputRight){
    let expandedInput = [];
    let dBox = [32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,31,31,32,1];
    for(let i = 0 ; i < dBox.length ; i++){
        expandedInput[i] = inputRight[(dBox[i]-1)];
    }
    return expandedInput;
} 