//INIT LOAD ON SCROLL
AOS.init({
  once: true,
  offset: 50,
});

var scrollpos = window.scrollY;
var header = document.getElementById("header");
var logo = document.getElementById("logo");
var fill_white = document.getElementById("fill_white");
var shift_to_logo = document.getElementById("shift_to_logo");
var transform_logo = document.getElementById("transform_logo");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");

// HEADER ON SCROLL
document.addEventListener("scroll", function () {
  /*Apply classes for slide in bar*/
  scrollpos = window.scrollY;
  scrolled_edit(scrollpos > 80);
  $(window).scrollTop() + $(window).height() + 500 > $(document).height()
    ? $("#rightbar_social").addClass("active_social")
    : $("#rightbar_social").removeClass("active_social");
});
//STRATEGY TOGGLE
$(".header_strategy").click(function () {
  $(".body_strategy:visible")
    .not($(this).parents(".overflow-hidden").find(".body_strategy"))
    .parents(".overflow-hidden")
    .find(".show_details_strat svg")
    .addClass("hidden");
  $(".body_strategy:visible")
    .not($(this).parents(".overflow-hidden").find(".body_strategy"))
    .parents(".overflow-hidden")
    .find(".show_details_strat .show_down")
    .removeClass("hidden");
  $(".body_strategy:visible")
    .not($(this).parents(".overflow-hidden").find(".body_strategy"))
    .toggle(400);
  $(this).parents(".overflow-hidden").find(".body_strategy").toggle(700);
  let hidden_ico = $(this).find(".show_details_strat svg.hidden");
  $(this).find(".show_details_strat svg").addClass("hidden");
  hidden_ico.removeClass("hidden");
});
//SMOOTH SCROLL ON CLICK ON LINK
$("a").click(() => $("html").css("scrollBehavior", "smooth"));

// MOBILE MENU ONCLICK

var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;
function check(e) {
  var target = e && e.target;

  //Nav Menu
  if (!checkParent(target, navMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, navMenu)) {
      // click on the link
      scrolled_edit(navMenuDiv.classList.contains("hidden"));
      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
      } else {
        navMenuDiv.classList.add("hidden");
      }
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classList.add("hidden");
    }
  }
}

function scrolled_edit(flag) {
  if (flag) {
    logo.classList.remove("opacity-0");
    fill_white.classList.remove("fill_white");
    transform_logo.classList.add("to_the_moon");
    shift_to_logo.classList.remove("shift_for_logo");
    header.classList.add("bg-white");
    navaction.classList.remove("bg-white");
    navaction.classList.add("gradient");
    navaction.classList.remove("text-gray-800");
    navaction.classList.add("text-white");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-gray-800");
      toToggle[i].classList.remove("text-white");
    }
    header.classList.add("shadow");
    navcontent.classList.remove("bg-gray-100");
    navcontent.classList.add("bg-white");
  } else {
    logo.classList.add("opacity-0");
    fill_white.classList.add("fill_white");
    transform_logo.classList.remove("to_the_moon");
    shift_to_logo.classList.add("shift_for_logo");
    header.classList.remove("bg-white");
    navaction.classList.remove("gradient");
    navaction.classList.add("bg-white");
    navaction.classList.remove("text-white");
    navaction.classList.add("text-gray-800");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("text-gray-800");
    }

    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-gray-100");
  }
}
function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}
