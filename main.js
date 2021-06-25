// var str  = '20 30 4 10 8 4 45';
// var subString  = str.split(' ');
// console.log(subString)

var taoMang = function () {
    var ipNumber = document.getElementById('ipNumber').value;

    var subNumber = ipNumber.split(' ');
    var listNumber = [];
    listNumber.push(subNumber);

    return listNumber;
}
var tinhTong = function (arr) {
    var sum = 0;
    for (var i = 0; i <= arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/*
 *Bài 1 
 */
document.getElementById('btnTinhTong').addEventListener('click', function () {
    var ar = taoMang();
    var tinhTong = tinhTong(ar);

    var kqTinhTong = document.getElementById('kqTinhTong');
    kqTinhTong.innerHTML = 'Tổng các số nguyên là: ' + tinhTong;
    
})