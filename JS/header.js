
// nav-mobile-js
function welcome(){
    console.log(sessionStorage.getItem('paIn'));
    let res =  sessionStorage.getItem("paIn").split(',');
    res.forEach(function(item2,index){
        if(item2 == sessionStorage.getItem("userCurrent")){
               confirm(`Chào mừng ${window.localStorage.getItem(item2)}`);
         }
    })
    sessionStorage.clear();
    }
window.addEventListener('load', welcome());
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
// form for shipping cart
function displayShipForm(value){
    if(value.checked && value.value == 1)
    {
        document.getElementsByName('form-recieve-product')[0].style.display = 'block';
    }
    else
    {
        document.getElementsByName('form-recieve-product')[0].style.display = 'none';
    }
}
function checkInfoReciever(){
    let ok = true;
    var info = document.querySelectorAll('input[name|="reciever"]');
    var errReForm = document.querySelectorAll('span.errReForm');
    info.forEach(function(item,index){
        if(item.value == "")
        {
            if(index == 0)
            {
                errReForm[index].textContent = "Vui lòng nhập đầy đủ tên";
            }
            if(index == 1)
            {
                errReForm[index].textContent = "Vui lòng nhập đúng 11 chữ số";
            }
            if(index == 2)
            {
                errReForm[index].textContent = "Vui lòng nhập đúng địa chỉ (số nhà, đường, phường/xã, quận, tỉnh thành)";
            }
            ok=false;
        }
        else if((item.value.split(",").length - 1) != 4 && index == 2)
        {
            errReForm[index].textContent = "Vui lòng nhập đúng địa chỉ (số nhà, đường, phường/xã, quận, tỉnh thành)";
            ok=false;
        }
        else{
            errReForm[index].textContent="";
        }
    });
    return ok;
}
