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