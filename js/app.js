// STAMPARE IN CONSOLE I NUMERI DA 1 A 100
for (let i = 0; i < 100; i++) {
    let num = i + 1
    console.log(num)
     

    // SELEZIONARE I MULTIPLI DI 3
    let numM3 = num % 3

    // STAMPARE "FIZZ" PER I NUMERI MULTIPLI DI 3
    if (numM3 === 0) {
        let numM3 = 'fizz'
        console.log(numM3)
        
    }
}

// SELEZIONARE I MULTIPLI DI 5
// STAMPARE "BUZZ" PER IL MULTIPLI DI 5
// SELEZIONARE I NUMERI DIVISIBILI SIA PER 3 CHE PER 5
// STAMPARE "FIZZBUZZ" PER I NUMERI DIVISIBILI SIA PER 3 CHE PER 5