setInterval(function(){
 let deta= new Date()

 let h = deta.getUTCHours()
 let m = deta.getMinutes()
 let s = deta.getSeconds()

 document.getElementById("hour").innerHTML = h
 document.getElementById("minute").innerHTML = m
 document.getElementById("second").innerHTML = s

 
},1000)