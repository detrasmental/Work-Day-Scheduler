//Todays date and current time
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    var interval = setInterval(function() {
        var momentNow = moment();
        $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                            + momentNow.format('dddd')
                             .substring(0,3).toUpperCase());
        $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
      }, 100);
$(document).ready(function() {
    
    
    function changeColor() {
        // the current time
        var currentHour = moment().hours();

        // changes background color based on if the time is past, present or future
        $(".time-block").each(function () {
            var timeIs = parseInt($(this).attr("id"));

            console.log(timeIs, currentHour);

            // what time is it? Change color accordingly 
            if (timeIs < currentHour) {
                $(this).addClass("past");
            } else if (timeIs === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });

    }

    changeColor();

    $(".saveBtn").click(function () { 
        // console.log(this);
        var text = $(this).siblings(".schedule").val();
        var time = $(this).parent().attr("id");
        // console.log(text, time);
        localStorage.setItem(time, text);
        console.log(text);
    });

    $("#8 .schedule").val(localStorage.getItem("8"));
    $("#9 .schedule").val(localStorage.getItem("9"));
    $("#10 .schedule").val(localStorage.getItem("10"));
    $("#11 .schedule").val(localStorage.getItem("11"));
    $("12 .schedule").val(localStorage.getItem("12"));
    $("#13 .schedule").val(localStorage.getItem("13"));
    $("#14 .schedule").val(localStorage.getItem("14"));
    $("#15 .schedule").val(localStorage.getItem("15"));
    $("#16 .schedule").val(localStorage.getItem("16"));
    $("#17 .schedule").val(localStorage.getItem("17"));

    $(".redbtn").click(function() {
        $("textarea").val("");
        localStorage.clear()
        });


});