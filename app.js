var collectionRef = db.collection("meetings");
$('#time-input').chungTimePicker({
    viewType: 1
});

$("#add-btn").click(function () {
    //取得網頁上的值
    var $nameInput = $("#name-input").val();
    var $dateInput = $("#date-input").val();
    var $timeInput = $("#time-input").val();
    var $locationInput = $("#location-input").val();
    var $attendeesInput = $("#attendees-input").val();
    var $agendaTextarea = $("#agenda-textarea").val();
    var $meetingMinutesTextarea = $("#meeting-minutes-textarea").val();
    console.log($timeInput);
    //取得系統時間
    //取得時間
    var currentdate = new Date();
    var datetime = currentdate.getFullYear() + "-" +
        (currentdate.getMonth() + 1) + "-" +
        currentdate.getDate() + " " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();
    //存成物件
    var meeting = {
        "meeting": {
            "name": $nameInput,
            "date": $dateInput,
            "time": $timeInput,
            "location": $locationInput,
            "attendees": $attendeesInput,
            "agenda": $agendaTextarea,
            "minutes": $meetingMinutesTextarea
        },
        "creation-time": datetime
    };
    //存入資料庫
    collectionRef.add(meeting)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            console.log("已新增");
            $('.alert').alert()
            $(".form-control").val("");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

});