// Using Moment, but look at Luxon for the future
var todayDate = moment().format('dddd, MMM Do YYYY LT');
$("#currentDay").html(todayDate);

$(function () {
    $(".saveButton").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save to local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get the current time
        var timeNow = moment().time();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("time")[1]);

          
            if (blockTime < timeNow) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
                
                
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
                
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage, display to time block

    $("#time8am .description").val(localStorage.getItem("time8am"));
    $("#time9am .description").val(localStorage.getItem("time9am"));
    $("#time10am .description").val(localStorage.getItem("time10am"));
    $("#time11am .description").val(localStorage.getItem("time11am"));
    $("#time12pm .description").val(localStorage.getItem("time12pm"));
    $("#time1pm .description").val(localStorage.getItem("time1pm"));
    $("#time2pm .description").val(localStorage.getItem("time2pm"));
    $("#time3pm .description").val(localStorage.getItem("time3pm"));
    $("#time4pm .description").val(localStorage.getItem("time4pm"));
    $("#time5pm .description").val(localStorage.getItem("time5pm"));

    timeTracker();
})