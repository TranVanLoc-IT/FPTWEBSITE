

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
//
function btnClickProductMount(e){
    const grandE = e.parentElement.parentElement;
    var getCost = grandE.parentElement.parentElement.querySelector("p.cost-state");
    var getMount = grandE.querySelector(".spn-mount");
    var mountState = parseInt(getMount.textContent);
    let oldMount = mountState;
    getCost.style.direction = "rtl";
    var costState = parseFloat(getCost.textContent.replace(/\.|\đ/g,''));
    if( mountState >= 1)
    {
        if(e.name == "asc")
        {
            mountState++;
        }
        else{
            mountState--;
        }
        costState = (costState + (costState / (mountState == 1 ? 2 : oldMount < mountState ? mountState - 1 : oldMount))*(oldMount < mountState ? 1 : -1));
        getMount.textContent = mountState;
        getCost.innerHTML = costState.toLocaleString('vi-VN',{minimumFractionDigitsch: 3}) + '<span class="text-decoration-underline">đ</span>';
    }
    totalMoney();
}
function totalMoney(){
    let getAll = document.querySelectorAll('.cost-state');
    var total = 0;
    getAll.forEach(function(item,index){
        total += parseFloat(item.textContent.replace(/\.|\đ/g,''));
    });
    document.querySelector(".temp-money").textContent = total.toLocaleString('vi-VN');
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