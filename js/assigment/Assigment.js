var arr_hinh = [
  "/img/image/img2.jpg",
  "/img/image/img3.jpg",
  "/img/image/img4.jpg",
];

var index = 0;
var intervalId;

function prev() {
  index--;
  if (index < 0) index = arr_hinh.length - 1;
  document.getElementById("hinh").src = arr_hinh[index];
  updateDots();
}
function next() {
  index++;
  if (index == arr_hinh.length) index = 0;
  document.getElementById("hinh").src = arr_hinh[index];
  updateDots();
}
function changeImage(newIndex) {
  index = newIndex;
  document.getElementById("hinh").src = arr_hinh[index];
  updateDots(); 
}
function updateDots() {
  var dots = document.querySelectorAll(".dot");
  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });
  dots[index].classList.add("active");
}
intervalId = setInterval(next, 3000);

var chonsize = 0;

var bigimg = document.querySelector('.img-big');

var smallimg = document.querySelector('.img-con0');

var smallimg2 = document.querySelector('.img-con2');
var smallimg3 = document.querySelector('.img-con3');

var sizeS = document.querySelector('.S');
var sizeM = document.querySelector('.M');
var sizeL = document.querySelector('.L');

var giaTien = document.querySelector('.Gia-tien');



function Thaydoisize(event) {
  chonsize = event.target;

if (chonsize == sizeM) {
  giaTien.textContent = "60.000 vnđ"; 
} else if (chonsize == sizeL) {
  giaTien.textContent = "70.000 vnđ"; 
}else{
  giaTien.textContent = "50.000 vnđ";
}
}
// Gán sự kiện cho các nút size
sizeS.addEventListener('click', Thaydoisize);
sizeM.addEventListener('click', Thaydoisize);
sizeL.addEventListener('click', Thaydoisize);


function Thaydoiloai(event) {
var thayloai = event.currentTarget;

if (thayloai == smallimg2) {
giaTien.textContent = '100.000 vnđ';
} else if (thayloai == smallimg3) {
giaTien.textContent = '150.000 vnđ';
} else {
giaTien.textContent = "50.000 vnđ";
}
}
smallimg.addEventListener('click', Thaydoiloai);
smallimg2.addEventListener('click', Thaydoiloai);
smallimg3.addEventListener('click', Thaydoiloai);
