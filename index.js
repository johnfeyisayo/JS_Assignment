function showPrimes(lowerNum, higherNum) {
    for (let i = lowerNum; i <= higherNum; i++) {
        let isEven = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isEven = 1;
                break;
            }
        }
        if (i > 1 && isEven === 0) {
            console.log(i);
        }
    }
}
showPrimes(2, 25);
