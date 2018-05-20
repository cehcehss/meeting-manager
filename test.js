function SubtractDate(D1, D2) {
    //sDate1和sDate2是2002-12-18格式
    var aDate, oDate1, oDate2, iDays;
    splitedDate1 = D1.split("-");
    //轉換成12-18-2002格式
    newDate1 = new Date(splitedDate1[1] + '-' + splitedDate1[2] + '-' + splitedDate1[0]);
    splitedDate2 = D2.split("-");
    newDate2 = new Date(splitedDate2[1] + '-' + splitedDate2[2] + '-' + splitedDate2[0]);
    //把相差的毫秒數轉換為天數
    resultDays = parseInt(Math.abs(newDate1 - newDate2) / 1000 / 60 / 60 / 24);
    return resultDays;
}
var d1 = "2018-05-20";
var d2 = "2018-05-15";

var d3 = SubtractDate(d1, d2);
console.log(d3);