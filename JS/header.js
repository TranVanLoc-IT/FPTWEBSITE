

// nav-mobile-js

var _mobileDropdown = document.querySelectorAll('.mobile-dropdown-js');
var _sublistMobile = document.querySelectorAll('.sublist-mobile-js');
for(let i = 0; i < _mobileDropdown.length; i++)
{
    _mobileDropdown[i].addEventListener('click',function(){
        if(_sublistMobile[i].classList.contains('sublist-mobile'))
        {
            _sublistMobile[i].classList.remove('sublist-mobile');
        }
       else
             _sublistMobile[i].classList.add('sublist-mobile');
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
