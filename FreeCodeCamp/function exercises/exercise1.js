function addOrsub(integer) {
    if(integer < 10) {
        return integer + 7;
    } else if (integer >= 10) {
        return integer - 3;
    }
}

console.log(addOrsub(4));