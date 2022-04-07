var currentDayEl = $("#currentDay");
var now = moment();
var schedulerTopDate = now.format("dddd, MMMM Do");
var hour = now.hour();
var hourNoPeriod;

currentDayEl.text(schedulerTopDate);
var hourBlocks = ["10am", "11am", "12pm", "1pm", "2pm", "3pm","4pm", "5pm"];
var divContainerEl = $("#container");
var nineAmTextAreaEl = $("#9am");
var userEntryArray;

$.each(hourBlocks, function(i, hourBlock) {
    var divTimeblockEl = $("<div></div>");

    divTimeblockEl.attr("class", "time-block row");
    var divEl = $("<div></div>");
    divEl.text(hourBlock);
    divTimeblockEl.append(divEl);

    var textAreaEl = $("<textarea></textarea>");
    textAreaElClassBackgroundColor = checkPresentPastFuture(hourBlock);
    textAreaEl.attr("class", textAreaElClassBackgroundColor);
    textAreaEl.attr("id", hourBlock);
    divTimeblockEl.append(textAreaEl);

    var buttonEl = $("<button></button>");
    var idCounter = i + 2;
    buttonEl.text("save");
    buttonEl.attr({
        class: "saveBtn btn col col-lg-1",
        id: "saveBtn" + idCounter
    });

    divTimeblockEl.append(buttonEl);

    divContainerEl.append(divTimeblockEl);
 });

function checkPresentPastFuture(hB) {
    var present = "bg-danger description col col-lg-10";
    var past = "bg-secondary description col col-lg-10";
    var future = "bg-success description col col-lg-10";
    var tense;
    var hourPeriodLength = hB.length;

    hourNoPeriod = Number(hB.substring(0, hourPeriodLength - 2));
    if (hourNoPeriod < 12 && hourNoPeriod !== 9 && hourNoPeriod !== 10 && hourNoPeriod !== 11) {
    hourNoPeriod = hourNoPeriod + 12;
    };

    if (hour === hourNoPeriod) {
    tense = present;
    } else if (hour < hourNoPeriod) {
    tense = future;
    };

    if (hour === 9) {
    nineAmTextAreaE1.attr("class", present);
    };
    if (hour > 9) {
    nineAmTextAreaEl.attr("class", present);
    } else if (hour < 9){
    nineAmTextAreaEl.attr("class", future);
    };

    return tense;
}    

function storeEntry(event) {
    var associatedHour = event.currentTarget.parentNode.children[0].textContent;
    var description = event.currentTarget.parentNode.children[1].value;
    userEntryArray.push({date: now, associatedHour: associatedHour, description: description.trim()});
    localStorage.setItem("userEntryArray", JSON.stringify(userEntryArray));
}

function renderEntry() {
    var lastEntryArray = JSON.parse(localStorage.getItem("userEntryArray"));
    
    if (lastEntryArray !== null) {
        for (var i=0; i < lastEntryArray.length; i++) {
            var elementId = lastEntryArray[i].associatedHour;
            document.getElementById(elementId).value = lastEntryArray[i].description;
            console.log("lastEntryArray" + i + ": " + lastEntryArray[i].description);
        }
    } else {
         userEntryArray = [];
    }
}    

userEntryArray = []; {
    var saveBtnClicked = "#saveBtn" + i;
    var saveBtnEl = "saveBtnEl" + i;
    var saveBtnEl = $(saveBtnClicked);


    saveBtnEl.on("click", function (event) {
        event.preventDefault();
        storeEntry(event);
    });

}
