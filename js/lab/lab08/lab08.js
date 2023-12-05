document.addEventListener("DOMContentLoaded", function () {
  
    var checkboxes = document.querySelectorAll('.sothich');
  
    // Lắng nghe sự kiện click cho từng ô checkbox
    checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
        // Gọi hàm hiển thị giá trị khi có sự kiện click
        hienThiGiaTri();
      });
    });
  
    // Hàm để hiển thị giá trị đã chọn
    function hienThiGiaTri() {
      // Lấy tất cả các ô checkbox đã được chọn
      var checkboxesChecked = document.querySelectorAll('.sothich:checked');
      
      // Hiển thị giá trị trong phần kết quả
      var hienThi = document.getElementById("hien-thi");
      hienThi.textContent = "Kết Quả: ";
      
      checkboxesChecked.forEach(function (checkbox, index) {
        if (index !== 0) {
          hienThi.textContent += " , ";
        }
        hienThi.textContent += checkbox.parentNode.textContent.trim();
      });
    }
  });