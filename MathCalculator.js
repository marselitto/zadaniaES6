class Calculator {
    static add(a, b){
        console.log(`Wynik dodawania: ${a+b}`)
    }
    static substruct(a, b){
        console.log(`Wynik odejmowania: ${a-b}`)
    }
    static multiply(a,b){
        console.log(`Wynik mnozenia: ${a*b}`)
    }
    static divide(a,b){
        console.log(`Wynik dzielenia: ${a/b}`)
    }
}
let dodawanie = Calculator.add(2,3)
let odejmowanie = Calculator.substruct(2,3)
let mnozenie = Calculator.multiply(2,3)
let dzielenie = Calculator.divide(2,3)