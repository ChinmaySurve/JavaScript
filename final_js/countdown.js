function formatTime(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const remainingHours = Math.floor((seconds % (3600 * 24)) / 3600);
  const remainingMinutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${days}d ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
}


const startTimer = function (){
  const date = document.getElementById("date").value
  const month = document.getElementById("month").value
  const year = document.getElementById("year").value
  
  const hour = document.getElementById("hour").value
  const minute = document.getElementById("minute").value
  const second = document.getElementById("second").value
  
  const dateFormat = month + " " + date + ", " + year + " " + hour + ":" + minute + ":" + second
  var deadline = new Date(dateFormat).getTime();
  var now = new Date().getTime();
  var elapsedSec = 0;
  
  const interval = setInterval(() => {
  
  
  console.log(typeof deadline)
  
  var t = Math.floor((deadline-now)/1000);

  if (elapsedSec > t){
    document.getElementById("timer_value").innerHTML = formatTime(t) + " Total Time";
    clearInterval(interval);
    }else{
    elapsedSec += 1;
    document.getElementById("timer_value").innerHTML = formatTime(elapsedSec) + " Time Elapsed.";

    }
    }, 1000);
    }


    const startReverseTimer = function (){
      const date = document.getElementById("date2").value
      const month = document.getElementById("month2").value
      const year = document.getElementById("year2").value
      
      const hour = document.getElementById("hour2").value
      const minute = document.getElementById("minute2").value
      const second = document.getElementById("second2").value
      
      const dateFormat = month + " " + date + ", " + year + " " + hour + ":" + minute + ":" + second
      var deadline = new Date(dateFormat).getTime();
      
      var elapsedSec = 0;
      
      const interval2 = setInterval(() => {
      var now = new Date().getTime();
      
      console.log(typeof deadline)
      
      var t = Math.floor((deadline-now)/1000);
    
      if (t < 0){
        document.getElementById("timer_value2").innerHTML = "Timer Expired";
        clearInterval(interval2);
        }else{
        document.getElementById("timer_value2").innerHTML = formatTime(t) + " Remaining.";
    
        }
        }, 1000);
        }