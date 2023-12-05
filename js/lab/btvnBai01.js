let NutBam = 0;

function DoiMau() {
     NutBam++;   // khi bấm vào nút button thì giá trị của nút bấm sẽ được tăng thêm 1 đơn vị  . và khi tăng thì sẽ gán những if bên dưới vào .

  const VanBan = document.getElementById("myText");

  if (NutBam === 1) {
    VanBan.style.backgroundColor = "yellow";
    VanBan.style.color = "green";
    VanBan.style.textTransform = "uppercase";
  } else if (NutBam === 2) {
    VanBan.style.backgroundColor = "pink";
    VanBan.style.color = "yellow";
    VanBan.style.textTransform = "capitalize";
  } else if (NutBam === 3) {
    VanBan.style.backgroundColor = "green";
    VanBan.style.color = "black";
    VanBan.style.textTransform = "lowercase";
    NutBam = 0; 
  }
}