const products = [
    {name: "T-shirt", price: 50, category: "Odzież"},
    {name: "Laptop", price: 3200, category: "Elektronika"},
    {name: "Książka", price: 30, category: "Ksiązki"},
    {name: "Monitor", price: 600, category: "Elektronika"},
    {name: "Klawiatura", price: 250, category: "Elektronika"}
]

function filterProducts(products, category, minPrice, maxPrice){
    return products.filter((product)=> 
        (product.category === category) && (product.price >= minPrice) && (product.price <= maxPrice)
       )
}

function display(filteredProducts){
    filteredProducts.forEach(({ name, price, category }) => {console.log(`${name} - ${category} - ${price} PLN`)});
}

const category = "Elektronika";
const minPrice = 100;
const maxPrice = 5000;
const filteredProducts = filterProducts(products, category, minPrice, maxPrice);
display(filteredProducts);