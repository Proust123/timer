const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
const milisec = document.querySelector('.milisec')
const start = document.querySelector('.start')
const stopped = document.querySelector('.stop')
const reset = document.querySelector('.reset')

let mincount = 0
let seccount = 0
let milicount = 0

let secintr;
let minintr;
let milisecintr;


start.addEventListener('click', () => {
    
    milisecintr = setInterval(() => {
        let miliIncrement = `${milicount}`
        
        if(miliIncrement >= 59){
            milicount = 0
        }else{
            milicount++
           milisec.innerHTML = `${miliIncrement}` < 10 ? `0${miliIncrement}` : `${miliIncrement}`
       }
    
    },10)    
    
        
    secintr = setInterval(() => {
        if(seccount >= 59){
            seccount = 0
        }else{
            seccount++
            sec.innerHTML = `${seccount}` < 10 ? `0${seccount}` : `${seccount}`
        }
    },1000)


    minintr = setInterval(() => {
        if(mincount >= 59){
            mincount = 0
        }else{
            mincount++
            min.innerHTML = `${mincount}` < 10 ? `0${mincount}` : `${mincount}`
        }
    },60000)
        
})

stopped.addEventListener('click', () => {
    console.log('clicking');
    clearInterval(minintr)
    clearInterval(secintr)
    clearInterval(milisecintr)
})

reset.addEventListener('click', () => {
    clearInterval(minintr)
    clearInterval(secintr)
    clearInterval(milisecintr)
     
    mincount = 0
    seccount = 0
    milicount = 0

    min.innerHTML = '00'
    sec.innerHTML = '00'
    milisec.innerHTML = '00'

})