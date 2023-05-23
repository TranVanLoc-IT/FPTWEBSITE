const data = [{
    "level": "Mã giảm 20% - tối đa 150k",
    "conditions": "Áp dụng khi mua thêm từ 400k",
    "img": "../Assets/images/header/bonus-item1.jpg",
    "title": "Pin sạc dự phòng  Li-polymer 20000mAH UMETRAVEL TRIP20C Trắng",
    "cost":"539.400 đ",
    "old-cost": "899.000 đ"
},
{
    "level": "Mã giảm 15% - tối đa 100k",
    "conditions": "Áp dụng khi mua thêm từ 300k",
    "img": "../Assets/images/header/bonus-item2.jpg",
    "title": "Tai nghe dây nhét tai i.value M-13 Đen",
    "cost":"300.000 đ",
    "old-cost": "350.000 đ"
},
{
    "level": "Mã giảm 10% - tối đa 150k",
    "conditions": "Áp dụng khi mua thêm từ 200k",
    "img": "../Assets/images/header/bonus-item3.png",
    "title": "Tai nghe dây nhét tai i.value M-13 Đen",
    "cost":"200.000 đ",
    "old-cost": "250.000 đ"
},
{
    "level": "Mã giảm 30% - tối đa 300k",
    "conditions": "Áp dụng khi mua thêm từ 700k",
    "img": "../Assets/images/header/bonus-item4.jpg",
    "title": "Adapter Sạc nhanh 2 cổng  UMETRAVEL A4 36W Trắng",
    "cost":"719.000 đ",
    "old-cost": "799.000 đ"
}];
// random three products
var randomProduct = [];
var checkSame = (index, array)=>{
    for(let i = 0 ; i< array.length ; i++) {
        if(index == array[i])
        {
            return false;
        }
    }
    return true;
}
window.onload = function(){
    for(let i = 0 ; i < 3; i++) {
        var rand = Math.floor(Math.random() * data.length);
        while(true)
        {
            if(checkSame(rand, randomProduct))break;
            rand = Math.floor(Math.random() * data.length);
        }
        randomProduct.push(rand);
        data.forEach(function(item,index){
            if(index == rand)
            {
                document.getElementById("bonus-render-item").innerHTML += `<li class="col-md-4">
                <b>${item.level }</b><br>${item.conditions}
                <div class="card">
                    <div class="row">
                        <div class="col-md-4 card-header">
                            <img src="${item.img}" alt="" class="tabs-bonus">
                        </div>
                        <div class="col-md-8 card-body">
                            <a href=""><h3 class="card-title fs-5 bonus-name">${item.title}</h3></a>
                            <p class="card-text text-left text-danger fs-4">${item.cost}<s class='sub-old-cost'>&nbsp;${item["old-cost"]}</s></p>
                            <button type="button" title="Mua thêm" class="fhs "><span><a href="index.html">Mua
                            thêm</a></span></button>
                        </div>
                    </div>
                </div>
            </li>`;
            }
        });
    }
}