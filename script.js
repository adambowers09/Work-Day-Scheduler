var timeArray = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

var displayTime = function(){
    var time = moment().format('LL');
    $("#currentDay").html(time)
}


displayTime();

// localStorage.setItem(time/hour, value/textarea)
$(".saveBtn").on("click", function() {
    console.log(this);
    var text = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);


$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

});


var currentTime = new Date();

var hours = currentTime.getHours();

$(".time-block").each(function () {
    var time = parseInt($(this).attr("id"))
  
    if (time === hours) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (time < hours) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });