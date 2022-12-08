function time(){
    let dt = new Date();
    var hr = dt.getHours();
    var mt = dt.getMinutes();
    var sec = dt.getSeconds();
    var sess = ''
    if(hr>=12){
        hr=hr-12
        sess='PM'
    }
    else{
        sess='AM'
    }
    document.querySelector('#hrs').innerText = hr
    document.getElementById('min').innerText = mt
    document.querySelector('#seco').innerText = sec
    document.getElementById('am-pm').innerText = sess
}
setInterval(time,1000)

document.querySelector('#btn').addEventListener ('mouseenter', () => {
document.querySelector('#btn').innerText = 'Party Time'
document.querySelector('#btn').style.background = 'linear-gradient(to right, red, green)'
})
document.querySelector('#btn').addEventListener ('mouseleave', () => {
    document.querySelector('#btn').innerText = 'Set Alarm'
    document.querySelector('#btn').style.background = 'linear-gradient(to right,#c7a5d6,rgb(189, 64, 189), rgb(177, 22, 177))'

 })

 document.querySelector('#btn').addEventListener('click', (e) => {
e.preventDefault()



let dt1 = new Date();
var hr1 = dt1.getHours();
var mt1 = dt1.getMinutes();
var sec1 = dt1.getSeconds();
var sess1 = ''
if(hr1>=12){
    hr1=hr1-12
    sess1='PM'
}
else{
    sess1='AM'
}

var wakeuptime = document.querySelector('#wake-time').value
var lunchtime = document.querySelector('#lunch-time').value
var naptime = document.querySelector('#nap-time').value
var nighttime = document.querySelector('#night-time').value

document.querySelector('.msg1').innerText = `WakeUp Time : ${wakeuptime}`
document.querySelector('.msg2').innerText = `Lunch Time : ${lunchtime}`
document.querySelector('.msg3').innerText = `Nap Time : ${naptime}`
document.querySelector('.msg4').innerText = `Night Time : ${nighttime}`

var splitwakeup = wakeuptime.split(" ")
var splitlunch = lunchtime.split(" ")
var splitnap = naptime.split(" ")
var splitnight = nighttime.split(" ")
console.log(splitwakeup);

if(splitwakeup[0] === (hr1 + sess1)){
  document.querySelector('#up-btn').innerHTML = 'GOOD MORNING!! WAKE-UP!!'
  document.querySelector('.msg5').innerHTML = 'Grab Some Healthy Breakfast!!!!'
  document.querySelector('#img2').innerHTML = '<img  src="./assets/Digital-msg.jpeg" alt=""></img>'
  
}
else if(splitlunch[0] === (hr1 + sess1)){
    document.querySelector('#up-btn').innerText = 'GOOD AFTERNOON !! TAKE SOME SLEEP'
    document.querySelector('.msg5').innerText = 'LETS HAVE SOME LUNCH !!'
    document.querySelector('#img2').innerHTML = '<img  src="./assets/Afternoon.jpeg" alt=""></img>'
}
    
else if(splitnap[0] === (hr1 + sess1)){
    document.querySelector('#up-btn').innerText = 'GOOD EVENING !!'
    document.querySelector('.msg5').innerText = 'STOP YAWNING, GET SOME TEA.. ITS JUST EVENING !'
    document.querySelector('#img2').innerHTML = '<img  src="./assets/Evening-Time.jpeg" alt=""></img>'
}
    
else if(splitnight[0] === (hr1 + sess1)){
    document.querySelector('#up-btn').innerText = 'GOOD NIGHT !!'
    document.querySelector('.msg5').innerText = 'CLOSE YOUR EYES AND GO TO SLEEP'
    document.querySelector('#img2').innerHTML = '<img  src="./assets/Sleep-Time.jpeg" alt=""></img>'
}
    

 })
 function time1(){
    let dt = new Date();
    var hr1 = dt.getHours();
    var mt1 = dt.getMinutes();
    var sec1 = dt.getSeconds();
    var sess1 = ''
    if(hr1>=12){
        hr1=hr1-12
        sess1='PM'
    }
    else{
        sess='AM'
    }
    document.querySelector('#hrs1').innerText = hr1
    document.getElementById('min1').innerText = mt1
    document.querySelector('#seco1').innerText = sec1
    document.getElementById('am-pm1').innerText = sess1
}
setInterval(time1,1000)