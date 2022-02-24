function productsFunction() {
    let products = document.querySelectorAll(".product");
    
    products.forEach(product => {
    
        product.addEventListener("click", e=>{
    
            let productPrice = e.currentTarget.children[1].children[1].firstElementChild.firstElementChild;
            console.log(e.target);
            let productTotal = e.currentTarget.children[1].lastElementChild;
            let quantity = e.currentTarget.children[1].children[2].children[1];

            if (e.target.classList.contains("fa-plus")){
                quantity.innerText ++;
            }

            else if(e.target.classList.contains("fa-minus") && e.target.parentElement.nextElementSibling.innerText>0){
            quantity.innerText --;
            }

            else if(e.target.classList.contains("remove-product")){
                product.remove();
            };
    
            productTotal.innerText = (quantity.innerText * productPrice.innerText).toFixed(2);
    
     
            allTotals();
    
        })
    
    });
    
    
    /////////////////SUBTOTAL KISMI////////////////
    let subTotal = document.getElementById("cart-subtotal");
    let tax = document.getElementById("cart-tax");
    let shipping =document.getElementById("cart-shipping");
    let total = document.getElementById("cart-total");
    
    function allTotals() {
        let toplam = 0;
        let productLines = document.querySelectorAll(".product-line-price");
        
        productLines.forEach(prototal=>{
            toplam += +prototal.innerText;
            subTotal.children[1].innerText= toplam.toFixed(2);
        });
    
        tax.children[1].innerText = (toplam * 0.18).toFixed(2);
        shipping.children[1].innerText = 15.00;
        total.children[1].innerText = (toplam + (toplam * 0.18) + 15).toFixed(2);
    
    }
    allTotals();
    
}
productsFunction();
