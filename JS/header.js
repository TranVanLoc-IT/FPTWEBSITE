

// nav-mobile-js

var _mobileDropdown = document.querySelectorAll('.mobile-dropdown-js');
var _sublistMobile = document.querySelectorAll('.sublist-mobile-js');
for(let i = 0; i < _mobileDropdown.length; i++)
{
    _mobileDropdown[i].addEventListener('click',function(){
        this.style.height = "auto";
    });
    _mobileDropdown[i].addEventListener('mouseover',function(){
        this.style.height = "50px";
    });
}
// button buy-products event
var countMount = 0;
const getProduct = document.querySelectorAll('.product-mount');
const getShipping = document.querySelectorAll('.shipping-mount');
getProduct.forEach(function(product){
    console.log(product.get);
});
function addProduct(){
    countMount++;
    for(let i = 0; i < getProduct.length; i++)
    {
        getProduct[i].textContent = countMount;
        getShipping[i].textContent = countMount;
    }
}
function removeProduct(){
    countMount--;
    for(let i = 0; i < getProduct.length; i++)
    {
        getShipping[i].textContent = countMount;
    }
}
