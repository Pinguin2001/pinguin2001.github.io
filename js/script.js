$(document).ready(function () {
  /* If navigate= argument is present in the url, navigate to that page */
  var pageName = getPageString("navigate");
  if (pageName !== null) {
    openPage(pageName);
  }
  else {
    openPage('Home');
  }
  /* Responive Nav */
  opencloseNav();
});

$(window).resize(function () {
  opencloseNav();
});

function opencloseNav() {
  if ($(window).width() > 700) {
    openNav();
  }
  else {
    closeNav();
  }
}

function openNav() {
  $('.Nav').width("250px");
}

function closeNav() {
  $('.Nav').width("0px");
}

function openPage(pageName) {
  var i, page;
  page = $(".page");
  if ($(window).width() < 700) {
    closeNav();
  }
  $("#page").load("pages/" + pageName + ".html");
}

function getPageString(String) {
  return decodeURI((new RegExp("[?]" + String + "=" + "([^&]+?)($)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}