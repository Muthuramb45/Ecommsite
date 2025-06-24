var productContainer = document.getElementById("products")
var search=document.getElementById("search")
var productList = document.querySelectorAll("#products .product-box");

search.addEventListener("keyup",function(event){
    var enteredval =event.target.value.toUpperCase()
    for(var count=0;count<productList.length;count++){
        var productname=productList[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredval)<0){
            productList[count].style.display="none"
        }else{
            productList[count].style.display="block"
        }
    }
})
function addToCart(name, price) {
    // Get current cart or initialize empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product already in cart
    let existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        // Increase quantity if already exists
        existingProduct.qty += 1;
    } else {
        // Add new product
        cart.push({ name: name, price: price, qty: 1 });
    }

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " added to cart!");
}