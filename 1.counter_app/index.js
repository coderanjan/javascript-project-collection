let counterNo = document.getElementById('counter_no')
let increase = document.getElementById('increase')
let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')

increase.addEventListener('click',function(){
    let updateNo=parseInt(counterNo.textContent)+1
    counterNo.textContent=`${updateNo}`
})

decrease.addEventListener('click',function(){
    let updateNo=parseInt(counterNo.textContent)-1
    if(updateNo < 0){
        counterNo.textContent='0'
    }else{
    counterNo.textContent=`${updateNo}`
    }
})

reset.addEventListener('click',function(){
    counterNo.textContent=`0`
})

