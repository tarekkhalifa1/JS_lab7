// global variables 
var day = new Date();
var alarmTime;
// Today by days
function showDay() {
  var days = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"];
  var weekDays = document.getElementById('days');
  var today = day.getDay() + 1; // to start from SAT not SUN
  if(today >= 7) today = 0; // reset day

  for (i = 0; i <= days.length - 1; i++) {
    var span = document.createElement('span');
    var spanText = document.createTextNode(days[i] + " ");
    span.appendChild(spanText);
    if (i == today) {
      span.setAttribute('class', 'today');
    }
    weekDays.appendChild(span);
  };

} // end show week days function


// Today by Time
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) h = 12;

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  ringAlarm(time);
  setTimeout(showTime, 1000);
} // end show time function



// Today by month and year
function showDate() {
  var d = day.getDate();
  d = d < 10 ? "0" + d : d;
  var m = day.getMonth();
  m = m < 10 ? "0" + m : m;
  var y = day.getFullYear();
  var today = d + " / " + m + " / " + y;
  document.getElementById('today').innerText = today;

} // end show date function

// to show Alarm 
function showAlarm() {
  var h = document.getElementById('alarm-h');
  var m = document.getElementById('alarm-m');
  for (i = 1; i <= 12; i++) {
    var opt = document.createElement('option');
    opt.setAttribute('value', i);
    var optText = document.createTextNode(i);
    opt.appendChild(optText);
    h.appendChild(opt);
  } // hours

  for (i = 0; i < 60; i++) {
    var opt = document.createElement('option');
    opt.setAttribute('value', i);
    var optText = document.createTextNode(i);
    opt.appendChild(optText);
    m.appendChild(opt);
  } // minuts

} // end show alarm function

// to Set Alarm
function setAlarm() {
  var hAlarm = document.getElementById('alarm-h').value;
  var mAlarm = document.getElementById('alarm-m').value;
  var sessionAlarm = document.getElementById('alarm-session').value;

  if (!hAlarm || !mAlarm || !sessionAlarm) {
    return alert("Unavailable Alarm");
  }

  document.getElementById('alarm-h').disabled = true;
  document.getElementById('alarm-h').style.opacity = 0.3;
  document.getElementById('alarm-m').disabled = true;
  document.getElementById('alarm-m').style.opacity = 0.3;
  document.getElementById('alarm-session').disabled = true;
  document.getElementById('alarm-session').style.opacity = 0.3;
  document.getElementById('set-alarm').disabled = true;
  document.getElementById('set-alarm').style.opacity = 0.3;
  alert("Successfully Alarm");

  hAlarm = hAlarm < 10 ? "0" + hAlarm : hAlarm;
  mAlarm = mAlarm < 10 ? "0" + mAlarm : mAlarm;
  alarmTime = hAlarm + ":" + mAlarm + ":" + "00" + " " + sessionAlarm;
  return alarmTime;

} // end set alarm function

function ringAlarm(time) {

  if (time == alarmTime) {
    var aud = document.getElementById("myAudio");
    aud.play();
    alert("Wake Up!");
  }

} // end ring alarm function


function resetAlarm() {
  document.getElementById('alarm-h').disabled = false;
  document.getElementById('alarm-h').style.opacity = 1;
  document.getElementById('alarm-m').disabled = false;
  document.getElementById('alarm-m').style.opacity = 1;
  document.getElementById('alarm-session').disabled = false;
  document.getElementById('alarm-session').style.opacity = 1;
  document.getElementById('set-alarm').disabled = false;
  document.getElementById('set-alarm').style.opacity = 1;
  
} // end reset alarm inputs function



function showAlarmBox(){
  var show = document.getElementById('alarm');
  show.style.display = "block";

} // end show alarm div function

showDay();
showTime();
showDate();
showAlarm();
document.getElementById('alarm-icon').addEventListener('click', showAlarmBox); // show alarm box
document.getElementById('reset-alarm').addEventListener('click', resetAlarm); // reset alarm
document.forms[0].addEventListener('submit', setAlarm); // to set alarm
