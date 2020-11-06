function slide1() {
  document.getElementById('id').src = "../public/images/um.jpg";
  setTimeout("slide2()", 1000)
}

function slide2() {
  document.getElementById('id').src = "2.bmp";
  setTimeout("slide3()", 1000)
}

function slide3() {
  document.getElementById('id').src = "3.bmp";
  setTimeout("slide1()", 1000)
}
