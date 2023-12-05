function submitForm() {
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    
    const inRa = document.getElementById("result");
    
    // inRa.innerHTML = `${firstName} ${lastName}`;
    inRa.innerHTML = firstName + ' ' + lastName;
    
    
    // Ngăn chặn sự kiện mặc định của nút submit (tránh việc gửi form)
    // event.preventDefault();
  }