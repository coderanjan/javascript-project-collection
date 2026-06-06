let time = document.getElementById('time')
let dates = document.getElementById('dates')
setInterval(()=>{
    let date=new Date();
    const ampm= date.getHours >=12 ? 'pm':'am'
    time.textContent=`${date.toLocaleTimeString()} ${ampm}`
},1000)

let date =new Date()
dates.textContent=`${date.toLocaleDateString()}`




