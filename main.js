// var str  = '20 30 4 10 8 4 45';
// var subString  = str.split(' ');
// console.log(subString)
var catChuoi = function () {
    var ipNumber = document.getElementById('ipNumber').value;
    return ipNumber.split(' ');
}

var tinhTong = function () {
    var arr = catChuoi();
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            sum += parseInt(arr[i]);
        } else {
            sum == 0;
        }
    }
    return sum;
}

var demSoDuong = function () {
    var arr = catChuoi();
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            count++;
        } else {
            count == 0;
        }
    }
    return count;
}

var timSoNhoNhat = function () {
    var arr = catChuoi();
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = parseInt(arr[i]);
        }
        console.log(min);

    }
    return min;
}

var timSoDuongNhoNhat = function () {
    var arr = catChuoi();
    var minSoDuong = parseInt(arr[0]);
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) >= 0 && parseInt(arr[i]) < minSoDuong) {
            minSoDuong = parseInt(arr[i]);
        }
        console.log(minSoDuong);
    }
    return minSoDuong;
}
var timSoChanCuoiCung = function () {
    var arr = catChuoi();
    var soChan = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (parseInt(arr[i]) % 2 == 0) {
            return arr[i];
        }
        return -1;
    }
}
var inMang = function () {
    var arr = catChuoi();
    var mang = '';
    for (var i = 0; i < arr.length; i++) {
        mang += arr[i] + ', ';
    }
    return mang;
}
var doiChoHaiViTri = function () {
    var viTri1 = document.getElementById('ipViTri1').value;
    var viTri2 = document.getElementById('ipViTri2').value;
    var arr = catChuoi();
    var tmp = arr[viTri1];
    arr[viTri1] = arr[viTri2];
    arr[viTri2] = tmp;
    mangMoi = '';
    for (var i = 0; i < arr.length; i++) {
        mangMoi += arr[i] + ' ';
    }
    return mangMoi;
}

var sapXepTangDan = function () {
    var arr = catChuoi();
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    var mangMoi = '';
    for (var i = 0; i < arr.length; i++) {
        mangMoi += arr[i] + ', ';
    }
    console.log(mangMoi)
    return mangMoi;
}
var timSoNguyenTo = function (n) {
    if (n < 2)
        return 0;
    for (var i = 2; i < n; i++)
        if (n % i === 0)
            return 0;
    return 1;
}
var timSoNguyenToDauTien = function () {
    var arr = catChuoi();
    for (var i = 0; i < arr.length; i++)
        if (timSoNguyenTo(arr[i]) == 1)
            return arr[i];
    return -1;
}
var demSoNguyen = function(){
    var arr = catChuoi();
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] %1 === 0)
            count++;
    }
    return count;
}
var soSanhSoAmDuong = function(){
    var arr = catChuoi();
    var demSoDuong = 0;
    var demSoAm = 0;
    var ketQua = '';
    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            demSoDuong++;
        }else{
            demSoAm++;
        }
    }
    if(demSoDuong > demSoAm){
        ketQua = 'M???ng c?? s??? d????ng nhi???u h??n s??? ??m';
    } else if(demSoAm > demSoDuong){
        ketQua = 'M???ng c?? s??? ??m nhi???u h??n s??? d????ng';
    }else{
        ketQua = 'M???ng c?? s??? d????ng b???ng s??? ??m';
    }
    return ketQua;
}
/*
 *B??i 1 
 */
document.getElementById('btnTinhTong').addEventListener('click', function () {
    var tong = tinhTong();

    var kqTinhTong = document.getElementById('kqTinhTong');
    kqTinhTong.innerHTML = 'T???ng c??c s??? nguy??n d????ng l??: ' + tong;
})

/*
*B??i 2 
*/
document.getElementById('btnDem').addEventListener('click', function () {
    var dem = demSoDuong();

    var kqDem = document.getElementById('kqDem');
    kqDem.innerHTML = 'S??? c??c s??? nguy??n l?? ' + dem;
})

/**
 * B??i 3
 */

document.getElementById('btnSoNhoNhat').addEventListener('click', function () {
    var soNhoNhat = timSoNhoNhat();

    var kqSoNhoNhat = document.getElementById('kqSoNhoNhat');
    kqSoNhoNhat.innerHTML = 'S??? nh??? nh???t trong m???ng l??: ' + soNhoNhat;
})

/**
 * B??i 4
 */
document.getElementById('btnSoDuongNN').addEventListener('click', function () {
    var soDuongNN = timSoDuongNhoNhat();

    var kqSoDuongNN = document.getElementById('kqSoDuongNN');
    kqSoDuongNN.innerHTML = 'S??? d????ng nh??? nh???t trong m???ng l??: ' + soDuongNN;
})

/**
 * B??i 5
 */
document.getElementById('btnSoChanCC').addEventListener('click', function () {
    var soChanCC = timSoChanCuoiCung();

    var kqSoChanCC = document.getElementById('kqSoChanCC');
    kqSoChanCC.innerHTML = 'S??? ch???n cu???i c??ng trong m???ng l??: ' + soChanCC;
})

/**
 * B??i 6
 */
document.getElementById('btnDoiCho').addEventListener('click', function () {
    var doiViTri = doiChoHaiViTri();
    var inMangCu = inMang();

    var kqDoiCho = document.getElementById('kqDoiCho');
    var kqMang = document.getElementById('kqMang');
    kqMang.innerHTML = 'M???ng c???a b???n l??: ' + inMangCu;
    kqDoiCho.innerHTML = 'M???ng sau khi ???????c ?????i 2 v??? tr?? l??: ' + doiViTri;
})

/**
 * B??i 7
 */
document.getElementById('btnSapXep').addEventListener('click', function () {
    var _sapXepTangDan = sapXepTangDan();
    var mangHienTai = inMang();

    var kqSapXep = document.getElementById('kqSapXep');
    var kqMangHienTai = document.getElementById('kqMangHienTai');
    kqMangHienTai.innerHTML = 'M???ng c???a b???n l??: ' + mangHienTai;
    kqSapXep.innerHTML = 'M???ng ???????c s???p x???p theo th??? t??? t??ng d???n l??: ' + _sapXepTangDan;
})
/**
 * B??i 8
 */
document.getElementById('btnTimSo').addEventListener('click', function(){
    var soNguyenToDauTien = timSoNguyenToDauTien();

    var kqSoNguyenTo = document.getElementById('kqSo');
    kqSoNguyenTo.innerHTML = 'S??? nguy??n t??? ?????u ti??n l??: ' + soNguyenToDauTien;
})

/**
 * B??i 9
 */
document.getElementById('btnSoNguyen').addEventListener('click',function(){
    var soNguyen = demSoNguyen();
    var _inMang = inMang();

    var kqSoNguyen = document.getElementById('kqSoNguyen');
    var mangSoThuc = document.getElementById('mangSoThuc');
    mangSoThuc.innerHTML = 'M???ng c???a b???n l??: ' + _inMang;
    kqSoNguyen.innerHTML = 'M???ng c?? ' + soNguyen + ' s??? nguy??n.'
})


/**
 * B??i 10
 */
document.getElementById('btnSoSanh').addEventListener('click', function(){
    var soSanh = soSanhSoAmDuong();
    var inRaMang = inMang();

    var kqSoSanh = document.getElementById('kqSoSanh');
    var inMangSoSanh = document.getElementById('inMangSoSanh');
    inMangSoSanh.innerHTML = 'M???ng c???a b???n l??: ' + inRaMang;
    kqSoSanh.innerHTML = soSanh;

})



