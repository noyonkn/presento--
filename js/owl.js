// Accordion Action
const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      accordionItem.forEach((el2) => el2.classList.remove("active"));
      el.classList.add("active");
    }
  })
);

  $('.noyon').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})







