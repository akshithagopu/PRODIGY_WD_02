let hr = 0;
let min = 0;
let sec = 0;
let milli = 0;

let timer = false;

function start() {
   timer = true;
   stopwatch();
}

function stop() {
   timer = false;
}

function reset() {
   timer = false;

   hr = 0;
   min = 0;
   sec = 0;
   milli = 0;

   document.getElementById("milli").innerHTML = "00";
   document.getElementById("sec").innerHTML = "00";
   document.getElementById("min").innerHTML = "00";
   document.getElementById("hr").innerHTML = "00";

   document.getElementById("laps").innerHTML = "";
}

function lap() {
   if (timer) {
       let lapTime = document.getElementById("hr").innerHTML + " : " +
                     document.getElementById("min").innerHTML + " : " +
                     document.getElementById("sec").innerHTML + " : " +
                     document.getElementById("milli").innerHTML;
       let laps = document.getElementById("laps");
       let lapElement = document.createElement("div");
       lapElement.innerText = lapTime;
       laps.appendChild(lapElement);
   }
}

function stopwatch() {
   if (timer) {
      milli++;
      if (milli == 100) {
         sec++;
         milli = 0;
      }
      if (sec == 60) {
         min++;
         sec = 0;
      }
      if (min == 60) {
         hr++;
         min = 0;
      } 

      let getHr = hr < 10 ? "0" + hr : hr;
      let getMin = min < 10 ? "0" + min : min;
      let getS = sec < 10 ? "0" + sec : sec;
      let getMilli = milli < 10 ? "0" + milli : milli;

      document.getElementById("hr").innerHTML = getHr;
      document.getElementById("min").innerHTML = getMin;
      document.getElementById("sec").innerHTML = getS;
      document.getElementById("milli").innerHTML = getMilli;

      setTimeout(stopwatch, 10);
   }
}
