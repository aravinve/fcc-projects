var bannerIndex = 0;
showBanners();

function showBanners() {
  var banners = document.getElementsByClassName("banner");
  for (var i = 0; i < banners.length; i++) {
    banners[i].style.display = "none";
  }
  bannerIndex++;
  if (bannerIndex > banners.length) {
    bannerIndex = 1;
  }
  banners[bannerIndex - 1].style.display = "flex";
  setTimeout(showBanners, 5000);
}
