// hour : minute : seconds
//  if i click the start button in the time interval of 1 sec increase sec val to 1
//  how to add 00 :00 :00 format?  --> pad Start
// completed with the start button. 
// how to implement the stop button

let hour = 0
let minute = 0
let sec = 0
let start=document.getElementById('start')
let stop=document.getElementById('stop')
let restart=document.getElementById('restart')
let time=document.getElementById('time')
let startInterval
start.addEventListener('click',function(){
    startInterval= setInterval(function(){
            if(sec==60){
                minute++
                sec=0
            }else if(minute == 60){
                hour++;
                minute=0
            }else{
                sec++
            }
            hour = String(hour).padStart(2,"0")
            minute = String(minute).padStart(2,"0")
            sec = String(sec).padStart(2,"0")
            time.textContent = `${hour}:${minute}:${sec}`
            document.title = `${hour}:${minute}:${sec}`

            
    },1000)
  

})

stop.addEventListener('click',function(){
    clearInterval(startInterval)
})
restart.addEventListener('click',function(){
    hour=0
    minute=0
    sec=0

    hour=String(hour).padStart(2,"0")
    minute=String(minute).padStart(2,"0")
    sec=String(sec).padStart(2,"0")
     time.textContent = `${hour}:${minute}:${sec}`
     document.title = `${hour}:${minute}:${sec}`
})


