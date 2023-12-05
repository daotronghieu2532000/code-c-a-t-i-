

function addRow() {

    const table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    // Tạo một hàng mới và cột trong hàng đó
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    // Gán giá trị cho các ô
    cell1.innerHTML = "New Row, Column 1";
    cell2.innerHTML = "New Row, Column 2";
    cell3.innerHTML = "New Row, Column 3";
  }