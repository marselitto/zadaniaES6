class Cart {
    constructor() {
        this.items = []
    }


    addProduct(name, price, quantity = 1) {
        this.items = [...this.items, { name, price, quantity }]
    }
    removeProduct(name) {
        this.items = this.items.filter(item => item.name !== name)
    }

    showCart() {
        if (this.items.length === 0) {
            console.log("Koszyk jest pusty.");
            return
        }

        console.log("Zawartość koszyka:");
        this.items.forEach(({ name, price, quantity }) => {
            console.log(`${name}, ${price} PLN x ${quantity} = ${price * quantity} PLN`)
        });
        const total = this.items.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
        console.log(`Całkowity koszt: ${total} PLN`)
    }
}
const myCart = new Cart();

myCart.addProduct("Laptop", 3000, 1)
myCart.addProduct("Smartfon", 1500, 2)
myCart.addProduct("Słuchawki", 200, 3)
myCart.showCart()
myCart.removeProduct("Smartfon");
myCart.showCart()