var db = firebase.firestore();
var collectionRef = db.collection("meetings");
var dataRefOrderByTime = collectionRef.orderBy('creation-time', 'asc');
dataRefOrderByTime.get().then(function (snapshop) {
    snapshop.forEach(function (doc) {
        var $meeting = `<div class="col-md-4 mb-5" id="${doc.id}">
                                <div class="card">
                                    <div class="card-header">${doc.data().meeting.name}</div>
                                    <div class="card-body">
                                        <p class="card-text">日期：${doc.data().meeting.date}</p>
                                        <p class="card-text">時間：${doc.data().meeting.time}</p>
                                        <p class="card-text">地點：${doc.data().meeting.location}</p>
                                        <p class="card-text">出席：${doc.data().meeting.attendees}</p>
                                        <a href="#" class="btn btn-primary" id="view-btn" data-toggle="modal" data-target="#largeModal" meeting-id="${doc.id}">View</a>
                                        <a href="#" class="btn btn-primary" id="edit-btn" meeting-id="${doc.id}">Edit</a>
                                        <a href="#" class="btn btn-primary" id="del-btn" meeting-id="${doc.id}">Delete</a>
                                    </div>
                                </div>
                             </div>`;

        $("#list-container").append($meeting);


        var $viewBtn = $(`#${doc.id} #view-btn`);
        $viewBtn.click(function () {
            var meeingId = $viewBtn.attr("meeting-id");
            db.doc(`/meetings/${meeingId}`)
                .get()
                .then(function (doc) {
                    //show modals render data
                    $(".modal-header").text(`${doc.data().meeting.name}`);
                    $("#date-span").text(`${doc.data().meeting.date}`);
                    $("#time-span").text(`${doc.data().meeting.time}`);
                    $("#location-span").text(`${doc.data().meeting.location}`);
                    $("#attendees-span").text(`${doc.data().meeting.attendees}`);
                    $("#agenda-span").text(`${doc.data().meeting.agenda}`);
                    $("#minutes-span").text(`${doc.data().meeting.minutes}`);

                });
        });

        var $delBtn = $(`#${doc.id} #del-btn`);
        $delBtn.click(function () {
            db
                .collection("meetings")
                .doc(doc.id)
                .delete();
            $(`div#${doc.id}`).remove();
        });
    });
    var currentdate = new Date();
    var now_date = currentdate.getFullYear() + "-" +
        (currentdate.getMonth() + 1) + "-" +
        currentdate.getDate();

    $(".card-header").each(function () {
        if ($(this).text() === "組會")
            $(this).append('<i class="fas fa-exclamation-circle"></i>');
    });

});