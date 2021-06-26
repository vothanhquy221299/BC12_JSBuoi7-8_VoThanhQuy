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
        }else{
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

var timSoNhoNhat  = function(){
    var arr = catChuoi();
    var min = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = parseInt(arr[i]);
        }
        console.log(min);

    }
    return min;
}

var timSoDuongNhoNhat = function(){
    var arr = catChuoi();
    var minSoDuong = parseInt(arr[0]);
    for(var i=0; i<arr.length; i++){
        if(parseInt(arr[i]) >= 0 && parseInt(arr[i]) < minSoDuong){
            minSoDuong = parseInt(arr[i]);
        } 
        console.log(minSoDuong);
    }
    return minSoDuong;
}
var timSoChanCuoiCung = function(){
    debugger
    debugger
    // var arr = catChuoi();
    // var soChan = 0;
    var arr = [10, 20, 8]
    for(var i= arr.length-1; i >= 0; i--){
        if(parseInt(arr[i]) %2 == 0){
            return arr[i];
        }
        return -1;
    }
}
var sc = timSoChanCuoiCung();
console.log(sc);
/*
 *Bài 1 
 */
document.getElementById('btnTinhTong').addEventListener('click', function () {
    var tong = tinhTong();

    var kqTinhTong = document.getElementById('kqTinhTong');
    kqTinhTong.innerHTML = 'Tổng các số nguyên dương là: ' + tong;
})

/*
*Bài 2 
*/
document.getElementById('btnDem').addEventListener('click', function () {
    var dem = demSoDuong();

    var kqDem = document.getElementById('kqDem');
    kqDem.innerHTML = 'Số các số nguyên là ' + dem;
})

/**
 * Bài 3
 */

document.getElementById('btnSoNhoNhat').addEventListener('click', function(){
    var soNhoNhat = timSoNhoNhat();

    var kqSoNhoNhat = document.getElementById('kqSoNhoNhat');
    kqSoNhoNhat.innerHTML = 'Số nhỏ nhất trong mảng là: ' + soNhoNhat;
})

/**
 * Bài 4
 */
 document.getElementById('btnSoDuongNN').addEventListener('click', function(){
    var soDuongNN = timSoDuongNhoNhat();

    var kqSoDuongNN = document.getElementById('kqSoDuongNN');
    kqSoDuongNN.innerHTML = 'Số dương nhỏ nhất trong mảng là: ' + soDuongNN;
})

/**
 * Bài 5
 */
 document.getElementById('btnSoChanCC').addEventListener('click', function(){
    var soChanCC = timSoChanCuoiCung();

    var kqSoChanCC = document.getElementById('kqSoChanCC');
    kqSoChanCC.innerHTML = 'Số chẵn cuối cùng trong mảng là: ' + soChanCC;
})




