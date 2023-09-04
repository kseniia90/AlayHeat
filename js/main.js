"use strict";

// show menu, dont scroll body while menu is open, close the menu if click happen outside menu
const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuButton = document.querySelector(".catalog-btn");


document.addEventListener("click", function(event){
  if(event.target.closest('.catalog-btn') || event.target.closest('a[href="#catalog"]')){
    event.preventDefault();
    menuBody.classList.toggle("_active");
    menuIcon.classList.toggle("_active");
    menuButton.classList.toggle("_active");
  }
  else if(!event.target.closest('.menu__body')) {
    menuBody.classList.remove("_active");
    menuIcon.classList.remove("_active");
    menuButton.classList.remove("_active");
  };
  
})

// Burger-menu: show menu, dont scroll body while menu is open, close the menu if click outside menu
const burgerMenuIcon = document.querySelector(".burger-menu__icon");
const burgerMenuBody = document.querySelector(".header__nav");

document.addEventListener("click", function(event){
  if(event.target.closest('.burger-menu-btn')){
    document.body.classList.toggle("lock");
    burgerMenuBody.classList.toggle("_active");
    burgerMenuIcon.classList.toggle("_active");
  }
  else if(!event.target.closest('.header__nav-link')) {
    document.body.classList.remove("lock");
    burgerMenuBody.classList.remove("_active");
    burgerMenuIcon.classList.remove("_active");
  };
  
})

// When the user scrolls down 250px from the top of the document, show the button
let topButton = document.querySelector(".back_top-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
}); // For Chrome, Firefox, IE and Opera
}

// Get all the dropdown from document

document.querySelectorAll(".dropdown-link").forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {

  if(window.innerWidth > 900){
    if (dropDown.classList.contains("hover-dropdown") === true) {
      dropDown.onmouseover = dropDown.onmouseout = dropdownHover;
  
      function dropdownHover(e) {
        if (e.type == "mouseover" && !!this.nextElementSibling ) {
          // Close the opend dropdown
          closeDropdown();
  
          // add the open and active class(Opening the DropDown)
          this.parentElement.classList.add("dropdown-open");
          this.nextElementSibling.classList.add("dropdown-active");
        }
      }
    }
}else{
  if (dropDown.classList.contains("dropdown-link") === true) {
    dropDown.addEventListener("click", function (e) {
      if (!!this.nextElementSibling &&
        this.nextElementSibling.classList.contains("dropdown-active") === true
      ) {
        // Close the clicked dropdown
        this.parentElement.classList.remove("dropdown-open");
        this.nextElementSibling.classList.remove("dropdown-active");

        closeDropdown();
      } else {
        // Close the opend dropdown
        closeDropdown();

        // add the open and active class(Opening the DropDown)
        this.parentElement.classList.add("dropdown-open");
        if (!!this.nextElementSibling) {
          this.nextElementSibling.classList.add("dropdown-active");
        }
      }
    });
  }
  
}
}

// Listen to the doc click
window.addEventListener("click", function (e) {
  // Close the menu if click happen outside menu
  if (e.target.closest(".header__menu__list") === null) {
    // Close the opend dropdown
    closeDropdown();
  }
});

// Close the openend Dropdowns
function closeDropdown() {
  // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
  document
    .querySelectorAll(".header__menu__list")
    .forEach(function (container) {
      container.classList.remove("dropdown-open");
    });

  document.querySelectorAll(".header__submenu__list").forEach(function (menu) {
    menu.classList.remove("dropdown-active");
  });

  document.querySelector(".header__nav").style.paddingBottom = null;
  document.querySelector(".header__nav").style.marginBottom = null;
}

// close the dropdown on mouse out from the dropdown list
document
  .querySelectorAll(".header__submenu__list")
  .forEach(function (dropDownList) {
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = closeDropdown;
  });

$(function () {
  // slider
  var owl = $(".owl-carousel-one").owlCarousel({
    dots: false,
    margin: 19,
    responsive: {
      0: {
        autoWidth:true,
      },
      430: {
        items: 2,
      },
      890: {
        items: 3,
      },
      1196: {
        items: 4,
      },
    },
  });
});

$(function () {
  // slider
  var owl = $(".owl-carousel-two").owlCarousel({
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        autoWidth:true,
      },
      1100: {
        items: 4,
      }
    },
  });
  $(".next-slide").click(function () {
    console.log('next');
    owl.trigger("next.owl.carousel");
  });
  $(".prev-slide").click(function () {
    console.log('prev');
    owl.trigger("prev.owl.carousel");
  });
});

$(function () {
  // slider
  var owl = $(".owl-carousel-categories").owlCarousel({
    dots: false,
    margin: 24,
    autoWidth:true,
    items:4
  });
});


// show filter list on click
if(!!document.querySelector(".filter_of_properties")) {
  document.addEventListener("click", function(event){
    if (event.target.closest(".filter_of_properties__title")){
      document.querySelector(".filter_of_properties__list").classList.toggle("_active");
      document.querySelector(".filter_of_properties__arrow").classList.toggle("_active");
    } else if (!event.target.closest('.filter_of_properties__list')) {
      document.querySelector(".filter_of_properties__list").classList.remove("_active");
      document.querySelector(".filter_of_properties__arrow").classList.remove("_active");
    };
  })
}
  

if(!!document.querySelector(".filter_of_categories")) {
  document.addEventListener("click", function(event){
    if (event.target.closest(".filter_of_categories__title")){
      document.querySelector(".filter_of_categories__list").classList.toggle("_active");
      document.querySelector(".filter_of_categories__arrow").classList.toggle("_active");
    } else if (!event.target.closest('.filter_of_categories__list')) {
      document.querySelector(".filter_of_categories__list").classList.remove("_active");
      document.querySelector(".filter_of_categories__arrow").classList.remove("_active");
    };
  })
}


const elProperties = document.querySelectorAll('.el_properties');
  
  elProperties.forEach((item)=>{
    item.addEventListener('click', (e)=>{
      let svg = item.querySelector('svg');
      svg.classList.toggle('active-icon');

    })
  })
