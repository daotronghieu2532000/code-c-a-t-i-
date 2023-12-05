

let so1 = "";
let so2 = "";

let PhepTinh = undefined;

function TinhToan(GiaTriNhap) {
        
       const TraVe = document.getElementById('TraVe');

    if (GiaTriNhap === "C") {
        so1 = "";
        so2 = "";
        PhepTinh = undefined;
        TraVe.value = "";
        return 0;
    } else if (GiaTriNhap === "=") {
        if (PhepTinh !== undefined) {
            const KetQua = ThuHienTinhToan(so1, so2, PhepTinh);
            TraVe.value = KetQua;
            so1 = "";
            so2 = "";
            PhepTinh = "";
        } else {
            TraVe.value = "ERR";
        }
    } else {
        if (isNaN(GiaTriNhap)) {
            PhepTinh = GiaTriNhap;
            TraVe.value = PhepTinh;
        } else {
            if (PhepTinh !== undefined) {
                so2 += GiaTriNhap;
                TraVe.value = so2;
            }else{
                so1 += GiaTriNhap;
                TraVe.value = so1;
         }                            
       }
    }
 }


function ThuHienTinhToan(so1,so2,PhepTinh) {
    so1 = Number(so1);
    so2 = Number(so2);
    
    switch (PhepTinh) {
        case '+':
            return so1 + so2 ;
        case '-':
            return so1 - so2 ;
        case 'x':
            return so1 * so2 ;
        case '/':          
            return so1 / so2 ;

    }
}