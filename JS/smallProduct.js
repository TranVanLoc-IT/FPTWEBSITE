const accessories = [
    {
        path: '../assets/images/accessory/a1.png',
        title: 'Nổi bật'
    },
    {
        path: '../assets/images/accessory/a2.png',
        title: 'Phụ kiện Apple'
    },
    {
        path: '../assets/images/accessory/a3.png',
        title: 'Dán màn hình'
    },
    {
        path: '../assets/images/accessory/a4.png',
        title: 'Ốp lưng - Bao da'
    },
    {
        path: '../assets/images/accessory/a5.png',
        title: 'Cáp, sạc'
    },
    {
        path: '../assets/images/accessory/a6.png',
        title: 'Pin dự phòng'
    },
    {
        path: '../assets/images/accessory/a7.png',
        title: 'Thiết bị mạng'
    },
    {
        path: '../assets/images/accessory/a8.png',
        title: 'Gaming Gear'
    },
    {
        path: '../assets/images/accessory/a9.png',
        title: 'Gimbal | Tay cầm chống rung'
    },
    {
        path: '../assets/images/accessory/a10.png',
        title: 'Thẻ nhớ, USB'
    },
    {
        path: '../assets/images/accessory/a11.png',
        title: 'Chuột, bàn phím'
    },
    {
        path: '../assets/images/accessory/a12.png',
        title: 'Sim 4G số đẹp'
    },
    {
        path: '../assets/images/accessory/a13.png',
        title: 'Camera hành trình'
    },
    {
        path: '../assets/images/accessory/a14.png',
        title: 'Camera an ninh'
    },
    {
        path: '../assets/images/accessory/a15.png',
        title: 'Phụ kiện Laptop'
    },
    {
        path: '../assets/images/accessory/a16.png',
        title: 'Quạt mini'
    },
    {
        path: '../assets/images/accessory/a17.png',
        title: 'Balo, túi chống sốc'
    },
    {
        path: '../assets/images/accessory/a18.png',
        title: 'Dây đeo đồng hồ'
    },
    {
        path: '../assets/images/accessory/a19.png',
        title: 'Ổ cứng di động'
    },
    {
        path: '../assets/images/accessory/a20.png',
        title: 'Apple Care'
    },
]

const desktopComponents = [
    {
        path: '../assets/images/components/c1.png',
        title: 'PC ráp sẵn CellphoneS',
        background: 'white'
    },
    {
        path: '../assets/images/components/c2.png',
        title: 'CPU',
        background: 'white'
    },
    {
        path: '../assets/images/components/c3.png',
        title: 'Mainboard',
        background: 'white'
    },
    {
        path: '../assets/images/components/c4.png',
        title: 'RAM',
        background: 'white'
    },
    {
        path: '../assets/images/components/c5.png',
        title: 'Ổ cứng',
        background: 'white'
    },
    {
        path: '../assets/images/components/c6.png',
        title: 'Card màn hình',
        background: 'white'
    },
    {
        path: '../assets/images/components/c7.png',
        title: 'Nguồn máy tính',
        background: 'white'
    },
    {
        path: '../assets/images/components/c8.png',
        title: 'Tản nhiệt',
        background: 'white'
    },
    {
        path: '../assets/images/components/c9.png',
        title: 'Case máy tính',
        background: 'white'
    },
]
const accessory = document.querySelector('.accessory')
const desktopComponentEle = document.querySelector('.desktop-component')

const renderSmall = (products, root) => {
    let htmls = products.reduce((preVal, curVal) => {
        return preVal + `
            <div class="small-product-item">
                <a href="#" style="background-image: url(${curVal.path}); background-color: ${curVal.background}" class="small-product-link">
                    <span>${curVal.title}</span>
                </a>
            </div>
        `
    }, '')
    root.innerHTML = htmls
}

renderSmall(accessories, accessory)
renderSmall(desktopComponents, desktopComponentEle)