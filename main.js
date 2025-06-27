//Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
//--------------------------------------------------------------



function fetchData() {
    fetch("jsonfile.json")
        .then(response => response.json()) 
        .then(data => {
            displayOpinions(data.opinions); 
            displayProducts(data.products);
            displayCategories(data.categories);
        })
        .catch(error => console.error("ERROR", error));
}


function displayOpinions(opinions) {
    const opinionContainer = document.getElementById("customers-container");
    opinions.forEach(opinion => {
        const opinionCard = `
            <div class="box">
                <i class='bx bxs-quote-alt-left'></i>
                <div class="stars">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star-half'></i>
                </div>
                <p>${opinion.text}</p>
                <div class="review-profile">
                    <img src="${opinion.img}" alt="User Image">
                    <h3>${opinion.name}</h3>
                </div>
            </div>
        `;
        opinionContainer.innerHTML += opinionCard;
    });
}


function displayProducts(products) {
    const productContainer = document.getElementById("Product-container");
    products.forEach(product => {
        const productCard = `
            <div class="box">
                <img src="${product.img}" alt="">
                <span>${product.description}</span>
                <h2>${product.name}</h2>
                <h3 class="price">${product.price}</h3>
                <i class='bx bx-cart-alt'></i>
                <i class='bx bx-heart'></i>
                <span class="discount">${product.discount}</span>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

function displayCategories(categories) {
    const categoriesContainer = document.getElementById("categories-conatiner");
    categories.forEach(categories => {
        const categorieCard = `
            <div class="box box1">
                    <img src="${categories.img}" alt="">
                    <h2>${categories.name}</h2>
                    <span>${categories.items}</span>
                    <i class='bx bx-right-arrow-alt' ></i>
                </div>
        `;
        categoriesContainer.innerHTML += categorieCard;
    });
}

window.onload = fetchData;
