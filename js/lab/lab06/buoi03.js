
var arrAnh = ["/img/image/img2.jpg", "/img/image/img3.jpg", "/img/image/img4.jpg", "/img/image/img5.jpg"];
var i = 4;
function slide() {
    i++;
    if (i > 4) {
        i = 0;
    }
    document.getElementById("anh").src = arrAnh[i];
}
setInterval(slide, 1000);

console.log("xin chào !")
alert("bắt đầu học nhé ! ")

let a = {
     name : 'Trọng Hiếu',
     age  : 23
};

console.log("In ra a : ", a)
console.log("Tôi tên là : " , a.name , "Tuổi :" , a.age);

