// Credit Image from  https://bluemochateas.com/เมนูปั่น/ title : แนะนำ 6 เมนูปั่น เมนูขายดีทำง่ายสร้างกำไร
function objectProduct() {
    return products = {
        "products": [
            {
                "id": 1,
                "name": "โกโก้",
                "price": 30,
                "image": "https://bluemochateas.com/wp-content/uploads/2021/05/%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B9%82%E0%B8%81%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%9B%E0%B8%B1%E0%B9%88%E0%B8%99.jpeg.webp",

            },
            {
                "id": 2,
                "name": "ชาเขียวมัทฉะ",
                "price": 45,
                "image": "https://bluemochateas.com/wp-content/uploads/2021/05/%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0%E0%B8%9B%E0%B8%B1%E0%B9%88%E0%B8%99-768x768.jpeg.webp",
            },
            {
                "id": 3,
                "name": "นมสดปั่นโอริโอ",
                "price": 30,
                "image": "https://bluemochateas.com/wp-content/uploads/2021/05/%E0%B8%99%E0%B8%A1%E0%B8%AA%E0%B8%94%E0%B8%9B%E0%B8%B1%E0%B9%88%E0%B8%99%E0%B9%82%E0%B8%AD%E0%B8%A3%E0%B8%B4%E0%B9%82%E0%B8%AD-636x1024.jpeg.webp",
            },
            {
                "id": 4,
                "name": "ชาไทยปั่นวิปครีม",
                "price": 35,
                "image": "https://bluemochateas.com/wp-content/uploads/2021/05/%E0%B8%8A%E0%B8%B2%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%9B%E0%B8%B1%E0%B9%88%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%9B%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1.jpeg.webp",
            },

            {
                "id": 5,
                "name": "โกโก้มาร์ชแมลโล่ว",
                "price": 35,
                "image": "https://bluemochateas.com/wp-content/uploads/2021/05/%E0%B9%82%E0%B8%81%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%8A%E0%B9%80%E0%B8%A1%E0%B8%A5%E0%B8%A5%E0%B9%82%E0%B8%A5%E0%B9%88.jpeg.webp",
            },
            {
                "id": 6,
                "name": "นมสดมะม่วงปั่น",
                "price": 35,
                "image": "https://bluemochateas.com/wp-content/uploads/2021/05/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%9B%E0%B8%B1%E0%B9%88%E0%B8%99.jpeg.webp",
            },


        ]
    };
}

// console.log(objectProduct().products);
// document.getElementById("list-drink").innerHTML = product.product[0].name
function displayProduct(product) {
    const products = product;
    for (let i = 0; i <= products.length; i++) {

        document.getElementById("list-drink").innerHTML += `<div class="container"><img class="item" src="${products[i].image}" alt=""/><div class="name-product">${products[i].name}</div><button class="price"><i class="bi bi-cart-check-fill"></i> ${products[i].price} บาท</button></div>`
    }


}

displayProduct(objectProduct().products);