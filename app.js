let $ = document
let hourElm = $.querySelector('.hour')
let minuteElm = $.querySelector('.minute')
let secondElm = $.querySelector('.second')



setInterval(function(){
    let myDate = new Date()
    let nowHour = myDate.getHours() 
    let nowMinute = myDate.getMinutes() 
    let nowSecond = myDate.getSeconds() 
 hourElm.innerHTML= nowHour
 minuteElm.innerHTML= nowMinute
 secondElm.innerHTML= nowSecond

 if(hourElm.innerHTML < 10){
   hourElm.innerHTML= "0" + nowHour
 }
 if(minuteElm.innerHTML < 10){
    minuteElm.innerHTML= '0' + nowMinute
 }
 if(secondElm.innerHTML < 10){
    secondElm.innerHTML = "0" + nowSecond
 }


} , 1000)