window.addEventListener('load', () => {
    const firstNum = +prompt('Enter a first num: ')
    const secondNum = +prompt('Enter a second num: ')
    const symbol = prompt('Enter a symbol: ')
    if (symbol == '+') {
        symOfNums = firstNum + secondNum
        console.log(`Sum of ${firstNum} and ${secondNum} = ${symOfNums}`)
    } else if (symbol == '-') {
        difference = firstNum - secondNum
        console.log(`Difference between ${firstNum} and ${secondNum} = ${difference}`)
    } else if (symbol == '*') {
        product = firstNum * secondNum
        console.log(`Product ${firstNum} and ${secondNum} = ${product}`)
    } else if (symbol == '/') {
        quotient = firstNum / secondNum
        console.log(`Quotient ${firstNum} and ${secondNum} = ${quotient}`)
    } else {
        console.log(`Error symbol ${symbol}\n You can use only \n1. + \n2. - \n3. * \n4. /`)
    }
})