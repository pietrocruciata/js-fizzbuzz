// STAMPARE IN CONSOLE I NUMERI DA 1 A 100

const scackElement = document.getElementById('scack')
for (let i = 0; i < 100; i++) {
    let num = i + 1



    // SELEZIONARE I MULTIPLI DI 3
    let numMultiplo3 = parseInt(num % 3); //number

    // SELEZIONARE I MULTIPLI DI 5
    let numMultiplo5 = parseInt(num % 5); //number




    // SELEZIONARE I NUMERI DIVISIBILI SIA PER 3 CHE PER 5
    // STAMPARE "FIZZBUZZ" PER I NUMERI DIVISIBILI SIA PER 3 CHE PER 5
    if (numMultiplo3 === 0 && numMultiplo5 === 0) {
        console.log('fizzbuzz')
        scackElement.innerHTML += `<div class= "fizzbuzz">${'fizzbuzz'}</div>`


        // STAMPARE "FIZZ" PER I NUMERI MULTIPLI DI 3
    } else if (numMultiplo3 === 0) {
        console.log('fizz')
        scackElement.innerHTML += `<div class= "fizz">${'fizz'}</div>`

        // STAMPARE "BUZZ" PER I NUMERI MULTIPLI DI 5
    } else if (numMultiplo5 === 0) {
        console.log('buzz')
        scackElement.innerHTML += `<div class= "buzz">${'buzz'}</div>`

    } else {
        console.log(num)
        scackElement.innerHTML += `<div class= "num">${num}</div>`

    }
}


