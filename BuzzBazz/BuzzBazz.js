function BuzzBazz(number) {
    for (let index = 0; index < number; index++) {
        if (index % 2 == 0 ) console.log(`${index} Buzz`)
        else if (index % 5 == 0) console.log(`${index} Bazz`);
        else console.log(index);
    }
}
BuzzBazz(100)

