$(document).ready(() => {

    
    
   

    $(".products").css("display", "none")
    console.log("dfdf")

    let initialId = $(".product-categories .clicked").attr("data-id");
        $(".products[data-category=" + initialId + "]").css("display", "flex")




    const faqs = document.querySelectorAll(".faq-item");


    faqs.forEach( faq => {

        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        })

    })



    let heroTl = gsap.timeline();


heroTl.from(".hero-section .main-text", {
    duration: 1,
    y: -20,
    opacity: 0
})
.from(".hero-section .subtext", {  
    duration: 1,
    y: -20,
    opacity: 0
}, 0.2)
.from(".hero-section .buttons", {  
    duration: 1,
    y: -20,
    opacity: 0
}, 0.3)
.from(".hero-section .stats", {  
    duration: 1,
    y: -20,
    opacity: 0
}, 0.4)
.from(".hero-section .img-container", {  
    duration: 1,
    y: -20,
    opacity: 0
}, 0.3)


let aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "top center", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start

    }
});

aboutTl.from(".about-section .main-text", {
    duration: 1,
    y: -20,
    opacity: 0
})
.from(".about-section .subtext", {
    duration: 1,
    y: -20,
    opacity: 0
}, 0.2)
.from(".about-section .features-container", {
    duration: 1,
    y: -20,
    opacity: 0
}, 0.2)
.from(".wave", {
    duration: 1,

    opacity: 0
}, 0.2)


let pricingTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pricing-section",
      start: "top center", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start

    }
});


aboutTl.from(".pricing-section .main-text", {
    duration: 1,
    y: -20,
    opacity: 0
})
.from(".pricing-section .subtext", {
    duration: 1,
    y: -20,
    opacity: 0
}, 0.5)
.from(".pricing-section .product-categories", {
    duration: 1,
    y: -20,
    opacity: 0
}, 0.6)
.from(".pricing-section .products-container", {
    duration: 1,
    y: -20,
    opacity: 0
}, 0.7)


let faqTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".faq-section",
      start: "top center", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start

    }
});


faqTl.from(".faq-section .main-text", {
    duration: 1,
    y: -20,
    opacity: 0
},0.1)
.from(".faq-section .sub-text", {
    duration: 1,
    y: -20,
    opacity: 0
}, 0.3)
.from(".faq-section .faqs-container", {
    duration: 1,
    y: -20,
    opacity: 0
}, 0.3)
.from(".faq-section .contact", {
    duration: 1,
    y: -20,
    opacity: 0
}, 0.3)


})


let showCategory = event => {
    let id = $(event.target).attr("data-id");

    $(".product-categories button").removeClass("clicked")
    $(event.target).addClass("clicked");


    $(".products").hide();
    $(".products[data-category=" + id + "]").css("display", "flex")

    
}



const burger = document.getElementById('burger');
const links = document.getElementById('links');

burger.addEventListener('click', () => {
    links.classList.toggle('active');
})

$("#links").click(() => {
    links.classList.remove('active');

})


$(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());


});












