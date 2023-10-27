const startTimer = function (){
  const date = document.getElementById("date").value
  const month = document.getElementById("month").value
  const year = document.getElementById("year").value
  
  const hour = document.getElementById("hour").value
  const minute = document.getElementById("minute").value
  const second = document.getElementById("second").value
  
  const dateFormat = month + " " + date + ", " + year + " " + hour + ":" + minute + ":" + second
  
  setInterval(() => {
  var deadline = new Date(dateFormat).getTime();
  var now = new Date().getTime();
  
  console.log(deadline)
  
  var t = deadline - now;
  var r_days = Math.floor(t / (1000 * 60 * 60 * 24));
  var r_hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var r_minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var r_seconds = Math.floor((t % (1000 * 60)) / 1000);
  if (t < 0){
    document.getElementById("timer_value").innerHTML = "Timer Expired"
    }else{
    document.getElementById("timer_value").innerHTML = r_days + "d " + r_hours + "h " + r_minutes +
    "m " + r_seconds
    }
    }, 1000);
    }