function createTimeSlots(){
    var times = [];
    for(var i = 0; i < 24; i++){
        times.push(i);
    }
    times.forEach((e, i) => {
        var timeSlot = document.createElement("div");
        timeSlot.className = "time-slot";
        timeSlot.id = "time-slot-" + i;

        var time = document.createElement("div");
        time.className = "time-slot-header";
        time.innerHTML = e + ":00";
        timeSlot.appendChild(time);

        var timeSlotBody = document.createElement("textarea");
        timeSlotBody.className = "time-slot-content";
        timeSlotBody.innerHTML = localStorage.getItem('timeSlot' + i);
        timeSlot.appendChild(timeSlotBody);

        var timeSlotSave = document.createElement("div");
        timeSlotSave.className = "time-slot-save";
        timeSlotSave.innerHTML = "Save";
        timeSlotSave.addEventListener("click", function(){
            timeSlotSave.innerHTML = "Saved";
            localStorage.setItem('timeSlot' + i, timeSlotBody.value);
        })
        timeSlot.appendChild(timeSlotSave);

        var currTime = new Date().getHours()
        if(currTime > e){
            timeSlot.style.backgroundColor = "lightgray";
            timeSlotBody.style.backgroundColor = "lightgray";
        }else if(currTime < e){
            timeSlot.style.backgroundColor = "lightgreen";
            timeSlotBody.style.backgroundColor = "lightgreen";
        }

        document.getElementById("calendar-container").appendChild(timeSlot);
    })
}