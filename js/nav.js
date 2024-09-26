let mobileNav = document.querySelector(".hamberger");
let mobNav = document.querySelector(".mob-nav")

const toggleNav = () => {
    mobileNav.classList.toggle("hamberger-active")
    mobNav.classList.toggle("mob-nav-active")
}

mobileNav.addEventListener("click", () => {
    toggleNav()
})


// **** target span ******* //

let childSpan = document.querySelectorAll(".rating-star")
let allSpan = [];

childSpan.forEach((element) => {
    let spans = element.querySelectorAll("span")

    spans.forEach((el, index) => {

        if (index % 2 !== 0) {

            el.classList.add("add-padding")

        } else {

        }
    });
});

let productName = document.querySelectorAll(".product-name")

productName.forEach(product => {
    product.style.padding = "2.5px 0 0 0"
});





// select gallery buttons //

let galleryButton = document.querySelectorAll(".filter-gallery button")
// console.log(galleryButton);
let galleryProduct = document.querySelectorAll(".image-section .hide")
// console.log(galleryProduct);

const filtercard = (e) => {
    document.querySelector(".active_button").classList.remove("active_button")

    e.target.classList.add("active_button")


    galleryProduct.forEach((product) => {
        product.classList.add("d-none")

        if (product.dataset.name === e.target.dataset.name) {
            product.classList.remove("d-none")

        } else if (e.target.dataset.name === "alluring-series") {
            galleryProduct[0].classList.remove("d-none")

        }
    });

};

galleryButton.forEach(button => button.addEventListener("click", filtercard));

// add display none all product

galleryProduct.forEach((el) => {
    el.classList.add("d-none")
});

// remove display none 0 index to show 0 index product
let l = galleryProduct[0]
l.classList.remove("d-none")





 