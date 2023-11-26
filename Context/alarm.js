// Function to play the alarm sound
function playAlarm() {
    var audio = new Audio('../tools/song/clock-alarm-8761.mp3');
    audio.play();
}

var audio;
// Function to set the alarm
function setAlarm() {
    var alarmTimeInput = document.getElementById('alarmTime');
    var alarmTime = alarmTimeInput.value;
     

    if (alarmTime === '') {
        alert('Please set a valid time for the alarm.');
        return;
    }

    var now = new Date();
    var alarmDateTime = new Date(now.toDateString() + ' ' + alarmTime);

    var timeUntilAlarm = alarmDateTime - now;

    if (timeUntilAlarm < 0) {
        alert('Please set a future time for the alarm.');
        return;
    }
    else{
        // alert("l' alarme est detecter");
        audio = new Audio('../tools/song/clock_01-25293.mp3');
        audio.play();
    }

    setTimeout(function() {
        playAlarm();
    }, timeUntilAlarm);
}

// Function to stop the alarm
function stopAlarm() {
    // You can add additional logic here to stop the alarm if needed
    if(audio){
        audio.pause();
    }
    else{
        alert("no alarm is currently playing")
    }
        
}
