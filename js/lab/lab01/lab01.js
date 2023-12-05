


var a = prompt("Nhập độ dài cạnh a:");
var b = prompt("Nhập độ dài cạnh b:");


var c = Math.sqrt(a*a + b*b);


document.write("Cạnh huyền của tam giác là: " + c);

// -------------------Bài 02-----------------------

var metvuong = prompt("Nhập giá trị mà mét vuông:");
var sao = metvuong / 360;
var hecta = metvuong / 10000;
var mau = metvuong / 10000;

console.log("Giá trị mà mét vuông bằng " + metvuong + " m2");
console.log("Giá trị bằng sào bằng " + sao + " sào");
console.log("Giá trị bằng ha bằng " + hecta + " ha");
console.log("Giá trị bằng mẫu bằng " + mau + " mẫu");

//------------------- Bài 03---------------------------

// Nhập trọng lượng cơ thể và chiều cao từ bàn phím
var trongluong = prompt("Nhập trọng lượng cơ thể (kg):");
var chieucao = prompt("Nhập chiều cao (m):");

// Tính BMI theo công thức BMI = (Trọng lượng cơ thể)/(Chiều cao x Chiều cao)
var BMI = trongluong / (chieucao * chieucao);

// Hiển thị kết quả và đánh giá
document.write("Chỉ số BMI của bạn là: " + BMI + " kg/m2");
if (BMI < 18.5) {
    document.write("Bạn bị thiếu cân");
} else if (BMI >= 18.5 && BMI <= 24.99) {
    document.write("Bạn có cân nặng bình thường");
} else if (BMI >= 25 && BMI <= 29.99) {
    document.write("Bạn bị thừa cân");
} else {
    document.write("Bạn bị béo phì");
}

//---------------------Bài 04---------------------------

const theList = ['Lauren', 'Kevin',true,35,null,undefined,['one', 'two']];


theList.shift(); 
theList.pop(); 

// Thêm 'FIRST' vào đầu mảng
theList.unshift('FIRST');


theList.splice(3, 0, 'hello world'); 


theList.splice(2, 0, 'middle');


theList.push('LAST');


console.log(theList); 



