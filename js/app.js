// STAMPARE IN CONSOLE I NUMERI DA 1 A 100
for (let i = 0; i < 100; i++) {
    let num = i + 1



    // SELEZIONARE I MULTIPLI DI 3
    let numMultiplo3 = parseInt(num % 3); //number

    // SELEZIONARE I MULTIPLI DI 5
    let numMultiplo5 = parseInt(num % 5); //number


    if (numMultiplo3 && numMultiplo5 !== 0) {

        console.log(num)

        // SELEZIONARE I NUMERI DIVISIBILI SIA PER 3 CHE PER 5
        // STAMPARE "FIZZBUZZ" PER I NUMERI DIVISIBILI SIA PER 3 CHE PER 5
    } else if (numMultiplo3 === 0 && numMultiplo5 === 0) {
        console.log('fizzbuzz')

        // STAMPARE "FIZZ" PER I NUMERI MULTIPLI DI 3
    } else if (numMultiplo3 === 0) {
        console.log('fizz')

        // STAMPARE "BUZZ" PER I NUMERI MULTIPLI DI 5
    } else if (numMultiplo5 === 0) {
        console.log('buzz')
    }
}
