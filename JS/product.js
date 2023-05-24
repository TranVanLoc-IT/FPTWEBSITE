const phoneProducts = [
    {
        id: 'P1',
        path: '../Assets/images/phone-product/ip_12.jpg',
        name: 'iPhone 12 Pro Max 128GB | Chính hãng VN/A',
        oldPrice: '28.990.000đ',
        newPrice: '25.590.000đ',
        desc: '[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và 1km khác',
        sale: 'Giảm 12%'
    },
    {
        id: 'P6',
        path: '../Assets/images/phone-product/ip_14.jpg',
        name: 'iPhone 14 Plus 128GB | Chính hãng VN/A',
        oldPrice: '24.990.000đ',
        newPrice: '27.990.000đ',
        desc: 'Giảm thêm đến 2 triệu khi thanh toán qua ví/ngân hàng Moca, VNPAY, Nam Á, STANDARD CHATERED,...',
        sale: 'Giảm 11%'
    },
    {
        id: 'P5',
        path: '../Assets/images/phone-product/ip_14-pro.png',
        name: 'iPhone 14 Pro 256GB | Chính hãng VN/A',
        oldPrice: '31.990.000đ',
        newPrice: '34.990.000đ',
        desc: 'Giảm thêm đến 2 triệu khi thanh toán qua ví/ngân hàng Moca, VNPAY, Nam Á, STANDARD CHATERED,...',
        sale: 'Giảm 9%'
    },
    {
        id: 'P4',
        path: '../Assets/images/phone-product/galaxy.jpg',
        name: 'Samsung Galaxy Z Fold4',
        oldPrice: '36.390.000đ',
        newPrice: '40.990.000đ',
        desc: 'Thu cũ đổi mới giảm ngay 5.000.000đ và 2 km',
        sale: 'Giảm 11%'
    },
    {
        id: 'P2',
        path: '../Assets/images/phone-product/xiaomi.png',
        name: 'Xiaomi Redmi Note 11',
        oldPrice: '4.150.000đ',
        newPrice: '4.690.000đ',
        desc: 'Thu cũ đổi mới - Trợ giá đến 300.000đ',
        sale: 'Giảm 12%'
    },
    {
        id: 'P3',
        path: '../Assets/images/phone-product/ip_12-64gb.jpg',
        name: 'iPhone 12 64GB | Chính hãng VN/A',
        oldPrice: '16.390.000đ',
        newPrice: '19.990.000đ',
        desc: '[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ',
        sale: 'Giảm 18%'
    },
]

const laptopProducts = [
    {
        path: '../Assets/images/laptop/macbook_256.png',
        name: 'Apple Macbook Pro 13 M2 2022  8GB 256GB I Chính hãng Apple Việt Nam',
        oldPrice: '31.590.000đ',
        newPrice: '35.990.000đ',
        desc: 'Thu cũ lên đời - Trợ giá 1 triệu',
        sale: 'Giảm 12%'
    },
    {
        path: '../Assets/images/laptop/asus-rog.png',
        name: 'Laptop Asus Gaming Rog Strix G15 G513IH HN015W',
        oldPrice: '18.990.000đ',
        newPrice: '23.990.000đ',
        desc: 'Ưu đãi 200.000đ khi mua kèm màn hình đồ họa ASUS USB-C',
        sale: 'Giảm 21%'
    },
    {
        path: '../Assets/images/laptop/apple-mini.jpg',
        name: 'Apple Mac mini M1 256GB 2020 I Chính hãng Apple Việt Nam ',
        oldPrice: '17.990.000đ',
        newPrice: '19.990.000đ',
        desc: 'Mua Office Home & Student 2021 kèm Macbook chỉ còn 2,090,000',
        sale: 'Giảm 10%'
    },
    {
        path: '../Assets/images/laptop/mac-pro.png',
        name: 'Macbook Pro 14 inch 2021 | Chính hãng Apple Việt Nam',
        oldPrice: '47.590.000đ',
        newPrice: '52.990.000đ',
        desc: 'Thu cũ lên đời - Trợ giá 1 triệu',
        sale: 'Giảm 10%'
    },
    {
        path: '../Assets/images/laptop/acer-nitro.png',
        name: 'Laptop Gaming Acer Aspire 7 A715-42G-R4XX NH.QAYSV.008',
        oldPrice: '15.990.000đ',
        newPrice: '19.990.000đ',
        desc: 'Thu cũ lên đời - Trợ giá 1 triệu',
        sale: 'Giảm 20%'
    },
]

const desktopProducts = [
    {
        path: '../Assets/images/desktop/pc-gaming.png',
        name: 'PC Gaming Asus Rog Strix GA35 G35DX-VN003W',
        newPrice: '42.490.000đ',
        oldPrice: '47.490.000đ',
        desc: 'Ưu đãi 200.000đ khi mua kèm màn hình đồ họa ASUS USB-C',
        sale: 'Giảm 11%'
    },
    {
        path: '../Assets/images/desktop/vesa.png',
        name: 'Giá treo màn hình máy tính North Bayou NB-F80',
        newPrice: '395.000đ',
        oldPrice: '650.000đ',
        desc: 'Ưu đãi giảm 50,000 khi mua giá treo màn hình',
        sale: 'Giảm 39%'
    },
    {
        path: '../Assets/images/desktop/xiaomi.png',
        name: 'Màn hình Xiaomi Monitor 1C BHR4510GL  23.8 inch ',
        newPrice: '3.090.000đ',
        oldPrice: '3.490.000đ',
        desc: 'Ưu đãi giảm 50,000 khi mua giá treo màn hình',
        sale: 'Giảm 11%'
    },
    {
        path: '../Assets/images/desktop/dell.png',
        name: 'Màn hình Dell UltraSharp 23.8 inch U2422H',
        newPrice: '6.790.000đ',
        oldPrice: '7.990.000đ',
        desc: 'Ưu đãi giảm 50,000 khi mua giá treo màn hình',
        sale: 'Giảm 15%'
    },
    {
        path: '../Assets/images/desktop/asus.png',
        name: 'Màn hình Asus VZ249HEG1R 24 inch',
        newPrice: '2.990.000đ',
        oldPrice: '3.990.000đ',
        desc: 'Ưu đãi giảm 50,000 khi mua giá treo màn hình',
        sale: 'Giảm 25%'
    },
]

const tabletProducts = [
    {
        path: '../Assets/images/tablet/ipad-pro.jpg',
        name: 'Apple iPad Pro 11 2021 M1 WiFi 128GB I Chính hãng Apple Việt Nam',
        newPrice: '19.690.000đ',
        oldPrice: '23.990.000đ',
        desc: 'Thu cũ lên đời - Trợ giá 1 triệu và 1km khác',
        sale: 'Giảm 18%'
    },
    {
        path: '../Assets/images/tablet/samsung.jpg',
        name: 'Samsung Galaxy Tab S8 Plus 256GB',
        newPrice: '23.400.000đ',
        oldPrice: '27.990.000đ',
        desc: 'Tặng bao da kiêm bàn phím Galaxy Tab S8 Plus chính hãng và 1km khác',
        sale: 'Giảm 16%'
    },
    {
        path: '../Assets/images/tablet/samsung-ultra.jpg',
        name: 'Samsung Galaxy Tab S8 Ultra',
        newPrice: '25.190.000đ',
        oldPrice: '30.990.000đ',
        desc: 'Tặng bao da kiêm bàn phím Galaxy Tab S8 Ultra chính hãng và 2km khác',
        sale: 'Giảm 19%'
    },
    {
        path: '../Assets/images/tablet/xiaomi.jpg',
        name: 'Xiami Pad 5',
        newPrice: '7.990.000đ',
        oldPrice: '8.990.000đ',
        desc: 'Thu cũ đổi mới - Trợ giá đến 300.000đ',
        sale: 'Giảm 11%'
    },
    {
        path: '../Assets/images/tablet/samsung-wifi.jpg',
        name: 'Samsung Galaxy Tab S8 WIFI',
        newPrice: '14.290.000đ',
        oldPrice: '17.990.000đ',
        desc: 'Tặng bao da Galaxy Tab S8 chính hãng',
        sale: 'Giảm 21%'
    },
]

const headPhoneProducts = [
    {
        path: '../Assets/images/headphone/h1.jpg',
        name: 'Tai nghe chụp tai Soundpeats A6 chống ồn',
        newPrice: '1.290.000đ',
        oldPrice: '1.600.000đ',
        sale: 'Giảm 19%',
        desc: 'Thu cũ lên đời - Trợ giá 300k'
    },
    {
        path: '../Assets/images/headphone/h2.jpg',
        name: 'Tai nghe không dây JBL Live Pro+',
        newPrice: '2.390.000đ',
        oldPrice: '2.990.000đ',
        sale: 'Giảm 20%',
        desc: 'BAO DA CAO CẤP CHO TAI NGHE JBL LIVE PRO+'
    },
    {
        path: '../Assets/images/headphone/h3.jpg',
        name: 'Tai nghe chụp tai Sony WH-1000XM4   ',
        newPrice: '6.290.000đ',
        oldPrice: '8.490.000đ',
        sale: 'Giảm 26%',
        desc: 'Tặng Áo Khoác Sony Extrabass'
    },
    {
        path: '../Assets/images/headphone/h4.jpg',
        name: 'Tai nghe Bluetooth Apple AirPods 2 VN/A',
        newPrice: '2.690.000đ',
        oldPrice: '3.990.000đ',
        sale: 'Giảm 33%',
        desc: 'Nhận gói 6 tháng Apple Music miễn phí'
    },
    {
        path: '../Assets/images/headphone/h5.jpg',
        name: 'Tai nghe Bluetooth Apple AirPods 3 MagSafe | Chính hãng Apple Việt Nam',
        newPrice: '4.790.000đ',
        oldPrice: '4.990.000đ',
        sale: 'Giảm 4%',
        desc: 'Nhận gói 6 tháng Apple Music miễn phí'
    },
]

const watchProducts = [
    {
        path: '../Assets/images/watch/w1.jpg',
        name: 'Samsung Galaxy Watch5',
        newPrice: '6.250.000đ',
        oldPrice: '8.990.000đ',
        sale: 'Giảm 30%',
        desc: 'Thu cũ lên đời - Trợ giá 300k'
    },
    {
        path: '../Assets/images/watch/w2.jpg',
        name: 'Apple Watch Series 7 45mm (GPS) Viền nhôm dây cao su | Chính hãng VN/A',
        newPrice: '10.590.000đ',
        oldPrice: '12.990.000đ',
        sale: 'Giảm 18%',
        desc: 'Thu cũ lên đời - Trợ giá 500k'
    },
    {
        path: '../Assets/images/watch/w3.jpg',
        name: 'Đồng hồ thông minh Huawei Watch GT3 dây da',
        newPrice: '4.990.000đ',
        oldPrice: '6.990.000đ',
        sale: 'Giảm 29%',
        desc: 'Dây đeo đồng hồ Huawei Watch GT3 Silicone 46mm'
    },
    {
        path: '../Assets/images/watch/w4.jpg',
        name: 'Đồng hồ thông minh trẻ em Myalo KidsPhone K84',
        newPrice: '2.790.000đ',
        oldPrice: '2.990.000đ',
        sale: 'Giảm 7%',
        desc: 'Tặng tai nghe trẻ em Oaxis Myfirst Headphones Wireless'
    },
    {
        path: '../Assets/images/watch/w1.jpg',
        name: 'Apple Watch SE 2022 40mm | Chính Hãng VN/A',
        newPrice: '7.290.000đ',
        oldPrice: '7.490.000đ',
        sale: 'Giảm 3%',
        desc: 'Thu cũ lên đời - Trợ giá 500k'
    },
]

const houseProducts = [
    {
        path: '../Assets/images/house/hs1.jpg',
        name: 'Máy tạo Oxy Hidgeem plus 7 lít',
        newPrice: '5.000.000đ',
        oldPrice: '7.700.000đ',
        sale: 'Giảm 35%',
        desc: 'Tặng máy đo nhịp tim và nồng độ oxy trong máu Finicare YM101'
    },
    {
        path: '../Assets/images/house/hs2.png',
        name: 'Máy Chiếu Smart TV 100 inch Bỏ Túi Samsung The Freestyle SP-LSP3',
        newPrice: '16.490.000đ',
        oldPrice: '24.900.000đ',
        sale: 'Giảm 34%',
        desc: 'Tặng pin sạc dự phòng 32000mAh, biến máy chiếu thành không dây, xem trọn bộ phim 3 giờ và 1km khác'
    },
    {
        path: '../Assets/images/house/hs3.jpg',
        name: 'Máy lọc không khí Xiaomi Air Purifier 4 Lite',
        newPrice: '2.890.000đ',
        oldPrice: '3.990.000đ',
        sale: 'Giảm 28%',
        desc: 'Tặng máy đo nhịp tim và nồng độ oxy trong máu Finicare YM101'
    },
    {
        path: '../Assets/images/house/hs4.jpg',
        name: 'Máy lọc không khí Xiaomi Air Purifier 4 Pro',
        newPrice: '5.090.000đ',
        oldPrice: '6.290.000đ',
        sale: 'Giảm 19%',
        desc: 'Tặng máy đo nhịp tim và nồng độ oxy trong máu Finicare YM101'
    },
    {
        path: '../Assets/images/house/hs5.jpg',
        name: 'Robot hút bụi lau nhà Ecovacs Deebot X1 OMNI ',
        newPrice: '21.990.000đ',
        oldPrice: '31.900.000đ',
        sale: 'Giảm 31%',
        desc: 'Tặng máy đo nhịp tim và nồng độ oxy trong máu Finicare YM101'
    },
]

const tiviProducts = [
    {
        path: '../Assets/images/tivi/t1.jpg',
        name: 'Smart tivi Xiaomi P1 43 inch',
        newPrice: '7.990.000đ',
        oldPrice: '9.990.000đ',
        sale: 'Giảm 20%',
        desc: 'Giảm 10% loa Soundbar khi mua kèm TV '
    },
    {
        path: '../Assets/images/tivi/t2.png',
        name: 'Smart TV Nanocell LG 4K 43 INCH 43NANO77TPA',
        newPrice: '10.590.000đ',
        oldPrice: '16.900.000đ',
        sale: 'Giảm 37%',
        desc: 'Giảm 10% loa Soundbar khi mua kèm TV '
    },
    {
        path: '../Assets/images/tivi/t3.jpg',
        name: 'Smart tivi Xiaomi P1 55 inch',
        newPrice: '8.990.000đ',
        oldPrice: '11.990.000đ',
        sale: 'Giảm 25%',
        desc: 'Giảm 10% loa Soundbar khi mua kèm TV '
    },
    {
        path: '../Assets/images/tivi/t4.jpg',
        name: 'Smart Tivi Xiaomi A2 58 inch',
        newPrice: '12.990.000đ',
        oldPrice: '13.990.000đ',
        sale: 'Giảm 7%',
        desc: 'Tặng Robot hút bụi Xiaomi Mop 2 Lite - Không lấy quà giảm 3.500.000đ'
    },
    {
        path: '../Assets/images/tivi/t5.jpg',
        name: 'Smart Tivi Xiaomi P1 43 inch',
        newPrice: '7.990.000đ',
        oldPrice: '9.990.000đ',
        sale: 'Giảm 20%',
        desc: 'Giảm 10% loa Soundbar khi mua kèm TV '
    },
]

const productPhone = document.querySelector('.product-phone-js')
const productLaptop = document.querySelector('.product-laptop-js')
const productDesktop = document.querySelector('.product-desktop-js')
const productTablet = document.querySelector('.product-tablet-js')
const productHeadPhone = document.querySelector('.product-head-phone-js')
const productWatch = document.querySelector('.product-watch-js')
const productHouse = document.querySelector('.product-house-js')
const productTivi = document.querySelector('.product-tivi-js')

var randomProduct = [];
var renderString = "";
var checkSame = (index, array) => {
    for (let i = 0; i < array.length; i++) {
        if (index == array[i]) {
            return false;
        }
    }
    return true;
}
const render = (products, root) => {
    var rand = Math.floor(Math.random() * products.length);
    for (let i = 0; i < 4; i++) {
        while (true) {
            if (checkSame(rand, randomProduct)) break;
            rand = Math.floor(Math.random() * products.length);
        }
        randomProduct.push(rand);
        products.forEach(function (item, index) {
            if (index == rand)
                renderString += `
        <div class="col-md-3 col-sm-6">
            <div class="product-item container">
                <div class="product-img">
                    <a href="#"><img src=${item.path} alt=""></a>
                </div>
                <p class="product-name">${item.name}</p>
                <div class="product-price">
                    <p class="product-new-price">${item.newPrice}</p>
                    <p class="product-old-price">${item.oldPrice}</p>
                </div>
                <div class="product-promotion">
                    <p>${item.desc || ''}</p>
                </div>
                <div class="buy-product">
                <a class='text-white' href='../HTML/detailsProduct.html' id=${item.id} onClick="sessionProductDetails(this)">
                    <button class="btn btn-danger fs-3" type="submit">
                    <i class="ti-shopping-cart fs-3"></i>&nbsp;Mua ngay
                    </button>
                </a>
                </div>
                <div class="product-action">
                    <span>Yêu thích</span>
                    <i class='ti-heart click-like'></i>
                </div>
                <div class="product-sale-off">
                    <span>${item.sale}</span>
                </div>
            </div>
        </div>
     `
        })
    }
    root.innerHTML = renderString;
    renderString = "";
    randomProduct = [];
}

render(phoneProducts, productPhone)
render(laptopProducts, productLaptop)
render(desktopProducts, productDesktop)
render(tabletProducts, productTablet)
render(headPhoneProducts, productHeadPhone)
render(watchProducts, productWatch)
render(houseProducts, productHouse)
render(tiviProducts, productTivi)
document.querySelectorAll('.click-like').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.classList.contains('ti-heart')) {
            this.classList.remove('ti-heart');
            this.classList.add("fa");
            this.classList.add("fa-heart");
        }
        else {
            this.classList.add('ti-heart');
            this.classList.remove("fa");
            this.classList.remove("fa-heart");
        }

    });
});
// button buy-products event
const getProduct = document.querySelectorAll('.product-mount');
var countMount = parseInt(getProduct[0].textContent);
function addProduct() {
    countMount++;
    for (let i = 0; i < getProduct.length; i++) {
        getProduct[i].innerHTML = countMount;
    }
}
function removeProduct() {
    countMount--;
    getProduct.textContent = countMount;
}
function sessionData() {
    sessionStorage.setItem('pr-mount', countMount);
}
function sessionProductDetails(t){
    sessionStorage.setItem(t.id,t.id);
    sessionData();
}
