// Credit Image from  https://bluemochateas.com/เมนูปั่น/ title : แนะนำ 6 เมนูปั่น เมนูขายดีทำง่ายสร้างกำไร
function objectProduct() {

    const products = {
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
    return products;
}

function shoppingCount(productId, countClicked) {

    console.log(productId, countClicked)





}

function countClicked() {
    var count = 0
    var btn = document.getElementById(productId)

    btn.OnClick = function () {
        return count++;
    }


}

function clickedProduct(productId) {
    // document.getElementById(productId).onclick = function () {
    // alert("button was clicked" + productId);

    let count = 0
    var product = document.getElementById(productId)
    product.onclick = function () {

        count++;
        console.log(productId, count);
        document.getElementById("piece").innerHTML = count;
        document.getElementById("piece2").innerHTML = count;
    };
    console.log(productId)



}

function displayPiece(elementId, productsId) {
    // console.log(elementId, productsId)
    document.getElementById(elementId).innerHTML = productsId;
}


function displayProduct(elementId, product) {

    for (const i in product) {
        document.getElementById(elementId).innerHTML +=
            `<div class="container">
                <img class="item" src="${product[i].image}" alt=""/>
                <div class="name-product">${product[i].name}</div>
                <button class="price" id="${product[i].id}" type="button" onclick="clickedProduct(${product[i].id});">
                <i class="bi bi-cart-check-fill"></i>${product[i].price} บาท
                </button>
            </div>`
    }


}

displayProduct("list-drink", objectProduct().products);
displayPiece("piece", 0);
displayPiece("piece2", 0);

