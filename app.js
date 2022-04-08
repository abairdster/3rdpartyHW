var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH");  
var currentHourInt = parseInt(currentHour); 


$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));


$(document).ready(function(){
   
   
    renderPlans();

     
     var dateTime = null,
     date = null;
     var update = function () {
    date = moment(new Date())
    dateTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    };
    dateTime = $('#currentDay')
    update();
    setInterval(update, 1000);

 
  for (var i = 0; i <= 12; i++) {  

    var inputHour = $("#" + i + "Row").attr("data-time"); 
    var inputHourInt = parseInt(inputHour); 

    if (currentHourInt === inputHourInt) {
        $("#" + i + "Row").addClass("present"); 
    }
    if (currentHourInt > inputHourInt) {  
        $("#" + i + "Row").addClass("past");
    }
    if (currentHourInt < inputHourInt) { 
        $("#" + i + "Row").addClass("future");
    }
  }

  
  saveBtn.on("click", function () { 

    var rowHour = $(this).attr("data-hour"); 
    var input = $("#" + rowHour + "Row").val(); 
    localStorage.setItem(rowHour, input); 
  });

  
  function renderPlans() {
    for (var i = 0; i <= 12; i++) {
    $("#" + i + "Row").val(localStorage.getItem(i));
    }
  }
});
