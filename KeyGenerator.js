function keyGenerator(key) {
    let roundKeys = [];
    let left = key.substring(0, key.length / 2).toString();
    let right = key.substring(key.length / 2).toString();
    //console.log("key"+key.length);
    let roundShifts = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1]
    //console.log("key " + key)
    for (let i = 0; i < 16; i++) {
        let thisRound = parseInt(roundShifts[i])
        let leftnew = left.substring(thisRound) + left.substring(0, thisRound);
        let rightnew = right.substring(thisRound) + right.substring(0, thisRound);
        //console.log("new left " + left.length)
        //console.log("new right " + right.length)
        roundKeys[i] = leftnew + rightnew;
        //console.log("round " + i + " key is" + roundKeys[i].length)
        left = leftnew;
        right = rightnew;

    }

    return roundKeys;
}