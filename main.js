/**
 * Bài Tập 1: Tính Tiền Lương Nhân Viên
 * Đầu Vào
 * - Tạo biến tổng số ngày làm (tongSoNgay)
 * - Lương mỗi ngày : 100,000 VNĐ ( const)
 * Xử Lý:
 * - tongSoNgay*LUONG
 * Đầu Ra: Show kết quả
 */




document.getElementById("btnTinhLuong").onclick = function (){
    const LUONG = 100000 ;
    var tongSoNgay = document.getElementById("txtTongSoNgay").value *1 ;
    var tongLuong = tongSoNgay * LUONG ;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tienLuongVND = currentFormat.format(tongLuong);
    var ketQua = "<div class= 'alert alert-danger'> Tổng Lương Là : "  +tienLuongVND + "VND" + "</div>";
    document.getElementById("footerTinhLuong").innerHTML = ketQua ;
};



/**
 * Bài Tập 2: Tính Giá Trị Trung Bình
 * Đầu Vào
 * - Tạo input cho 5 chố thực
 * - Number 1
 * - Number 2
 * - Number 3
 * - Number 4
 * - Number 5
 * Xử Lý:
 * - (number1 + number2 + number3 + number4 + number5) /5
 * Đầu Ra: Show kết quả
 */


 document.getElementById("btnTrungBinh").onclick = function (){
    var number1 = document.getElementById("number1").value *1 ;
    var number2 = document.getElementById("number2").value *1 ;
    var number3 = document.getElementById("number3").value *1 ;
    var number4 = document.getElementById("number4").value *1 ;
    var number5 = document.getElementById("number5").value *1 ;
    var giaTriTrungBinh = (number1 + number2 + number3 + number4 + number5) / 5 ;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var trungBinh = currentFormat.format(giaTriTrungBinh);
    var ketQua = "<div class= 'alert alert-danger'> Giá Trị Trung Bình Là : "  +trungBinh + "</div>";
    document.getElementById("footerTrungBinh").innerHTML = ketQua ;
};

/**
 * Bài Tập 3: Quy đổi tiền
 * Đầu Vào
 * - Tạo biến nhập usd (usd)
 * - Giá mỗi usd hiện tại 23,5000 ( VND)
 * Xử Lý:
 * - usd*VND
 * Đầu Ra: Show kết quả
 */




 document.getElementById("btnVND").onclick = function (){
    const VND = 23500 ;
    var usd = document.getElementById("txtUSD").value *1 ;
    var tongTienDoi = usd * VND ;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tienVND = currentFormat.format(tongTienDoi);
    var ketQua = "<div class= 'alert alert-danger'> Tổng Lương Là : "  +tienVND + "VND" + "</div>";
    document.getElementById("footerVND").innerHTML = ketQua ;
};



/**
 * Bài Tập 4: Tính Diện Tích và Chu Vi Hình Chữ Nhật
 * Đầu Vào
 * - Tạo biến nhập chiều dài (chieuDai)
 * - Tạo biến nhập chiều rộng (chieuRong)
 * Xử Lý:
 * - Diện Tích = chieuDai * chieuRong
 * - Chu Vi = (chieuDai + chieuRong) * 2
 * Đầu Ra: Show kết quả
 */




 document.getElementById("btnHinhChuNhat").onclick = function (){
    var chieuDai = document.getElementById("txtChieuDai").value *1 ;
    var chieuRong = document.getElementById("txtChieuRong").value *1 ;
    var dienTich = chieuDai * chieuRong ;
    var chuVi = (chieuDai + chieuRong) * 2 ;
    var ketQua = "<div>";
    ketQua += "<p class= 'alert alert-danger'>Diện Tích Là: " +dienTich + "</p>"
    ketQua += "<p class= 'alert alert-danger'>Chu Vi Là: " +chuVi + "</p>"
    ketQua += "</div>";
    document.getElementById("footerHinhChuNhat").innerHTML = ketQua ;
};


/**
 * Bài Tập 5: Tính Tổng 2 Ký Số
 * Đầu Vào
 * - Tạo biến nhập 2 Ký Số (n)
 * Xử Lý:
 * - Lấy số hàng chục: Math.floor (n%100/10) (hangChuc)
 * - Lấy số hàng đơn vị: n%10 (hangDonVi)
 * - tong2KySo = hangChuc + hangDonVi
 * Đầu Ra: Show kết quả
 */




 document.getElementById("btn2KySo").onclick = function (){
    var n = document.getElementById("txt2KySo").value *1 ;
    var hangChuc = Math.floor(n%100/10);
    var hangDonVi = n%10 ;
    var tong2KySo = hangChuc + hangDonVi ;
    var ketQua = "<div class= 'alert alert-danger'> Tổng 2 Ký Số Là : "  +tong2KySo  + "</div>";
    document.getElementById("footer2KySo").innerHTML = ketQua ;
};