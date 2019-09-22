const closebtn = document.getElementById("closebtn");
const navbar = document.getElementById("navbar");
const maindoc = document.getElementById("main-doc");
const menubtn = document.getElementById("menubtn");
const scrollupbtn = document.getElementById("scrollupbtn");
let isSideNavOpen = true;
window.onscroll = function() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollupbtn.style.display = "block";
  } else {
    scrollupbtn.style.display = "none";
  }
};
closebtn.addEventListener("click", closeUp);
const links = Array.from(document.getElementsByClassName("nav-link"));
links.forEach(element => {
  element.addEventListener("click", closeUp);
});
function closeUp() {
  navbar.style.width = "0px";
  maindoc.style.marginLeft = "0px";
  isSideNavOpen = false;
}
menubtn.addEventListener("click", function() {
  isSideNavOpen = true;
  checkWidth();
});
scrollupbtn.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
function checkWidth() {
  if (isSideNavOpen) {
    if (window.innerWidth > 750) {
      navbar.style.width = "250px";
    } else {
      navbar.style.width = "100%";
    }
    maindoc.style.marginLeft = "250px";
  }
}
