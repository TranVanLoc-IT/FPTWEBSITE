const datas = [
    {
        id: 'P1',
        path: '../Assets/images/phone-product/ip_12.jpg',
        name: 'iPhone 12 Pro Max 128GB | Chính hãng VN/A',
        oldPrice: '28.990.000đ',
        newPrice: '25.590.000',
        sale: 'Giảm 12%'
    },
    {
        id: 'P3',
        path: '../Assets/images/phone-product/ip_14.jpg',
        name: 'iPhone 14 Plus 128GB | Chính hãng VN/A',
        oldPrice: '24.990.000đ',
        newPrice: '27.990.000',
        sale: 'Giảm 11%'
    },
    {
        id: 'P5',
        path: '../Assets/images/phone-product/ip_14-pro.png',
        name: 'iPhone 14 Pro 256GB | Chính hãng VN/A',
        oldPrice: '31.990.000đ',
        newPrice: '34.990.000',
        sale: 'Giảm 9%'
    },
    {
        id: 'P4',
        path: '../Assets/images/phone-product/galaxy.jpg',
        name: 'Samsung Galaxy Z Fold4',
        oldPrice: '36.390.000đ',
        newPrice: '40.990.000',
        sale: 'Giảm 11%'
    },
    {
        id: 'P2',
        path: '../Assets/images/phone-product/xiaomi.png',
        name: 'Xiaomi Redmi Note 11',
        oldPrice: '4.150.000đ',
        newPrice: '4.690.000',
        sale: 'Giảm 12%'
    },
    {
        id: 'P6',
        path: '../Assets/images/phone-product/ip_12-64gb.jpg',
        name: 'iPhone 12 64GB | Chính hãng VN/A',
        oldPrice: '16.390.000đ',
        newPrice: '19.990.000',
        sale: 'Giảm 18%'
    },
]
datas.forEach(function (item, index) {
    if(item.id == sessionStorage.getItem(item.id))
    {
        document.getElementById('cart-Product').innerHTML += `<div class="col-md-7 col-sm-12 col-12 p-3 text-dark fs-2 font-weight-bold">
        Sản phẩm
        <div class="row">
            <div class="col-md-4 col-sm-4 col-4 text-left">
                <a href="">
                    <img src="${item.path}"
                        alt="" class="w-100 h-100"></a>
            </div>
            <div class="col-md-8 col-sm-8 col-8 text-left">
                <a href="" class="fs-4 text-danger">${item.name}</a>
                <ul class="fs-5 text-justify text-dark fs-4">
                    <li><i class="fa fa-mobile"></i>&nbsp;Chính: 6.6 inch, Super AMOLED, FHD+, 1080 x 2400 Pixels</li>
                    <li><i class="fa fa-camera"></i>&nbsp;48.0 MP + 8.0 MP + 5.0 MP</li>
                    <li><i class="fa fa-camera-retro"></i>&nbsp;MediaTek Dimensity 1080</li>
                    <li><i class="fa fa-microchip"></i>&nbsp;128 GB</li>
                    <li><i class="fa fa-hdd-o"></i>&nbsp;Chính: 6.6 inch, Super AMOLED, FHD+, 1080 x 2400 Pixels</li>
                </ul>
            </div>
        </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 p-3 text-dark fs-2 font-weight-bold">
        Số lượng
        <div class="row mt-5">
            <div class="col-md-4 col-sm-4 col-4">
                <button onclick="btnClickProductMount(this)" name="desc"  class="btn btn-info w-100 fs-5">-</button>
            </div>
            <div class="col-md-4 col-sm-4 col-4">
                <span class="form-control text-center fs-5 h-100 spn-mount">1</span>
            </div>
            <div class="col-md-4 col-sm-4 col-4">
                <button onclick="btnClickProductMount(this)" name="asc" class="btn btn-info w-100 fs-5">+</button>
            </div>
        </div>
        </div>
        <div class="col-md-3 col-sm-6 col-6 p-3 text-dark fs-2 font-weight-bold">Đơn giá
        <p class="mt-5 text-danger cost-state">${item.newPrice}<u class="text-decoration-underline">đ</u>
        </p>
        </div>`;
        sessionStorage.removeItem(item.id);
    }
})
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
            addProduct();
        }
        else{
            mountState--;
            removeProduct();
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