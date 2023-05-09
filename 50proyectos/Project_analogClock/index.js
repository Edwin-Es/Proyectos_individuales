const pinsec=document.querySelector(".pinsec")
const pinmin=document.querySelector(".pinmin")
const pinhour=document.querySelector(".pinhour")
const hours=document.querySelector(".hours")
const dates=document.querySelector(".date")
const theme=document.querySelector(".theme")
const clock=document.querySelector(".clock")
let darkmode=localStorage.getItem("dark-mode")
const container=document.querySelector(".container")

if(darkmode=="enabled"){
    enableDarkMode()
}

function formatDate(){
    const date=new Date();
    function normalDate(date){
        let daynumber=date.getDate()
        let day=date.getDay();
        let month=date.getMonth();
        let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
        let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        return `${days[day]}, ${months[month]} <span id="day">${daynumber}</span>`
    }
    dates.innerHTML=normalDate(date);
   

    function normalHour(date){
        let hour=date.getHours();
        let minute=date.getMinutes();
        let second=date.getSeconds();
        let amOrpm=hour>=12 ? "PM":"AM";
        hour=(hour%12)|| 12;
        hour=nozero(hour);
        minute=nozero(minute);
        second=nozero(second);
        
    let rotate=second*6;
    pinsec.style.transform=`rotateZ(${rotate}deg)`;
    let rotatemin=minute*6;
    pinmin.style.transform=`rotateZ(${rotatemin}deg)`;
    let rotatehour=hour*30;
    pinhour.style.transform=`rotateZ(${rotatehour}deg)`;
    return `${hour}:${minute} ${amOrpm}`

    }
    hours.innerHTML=normalHour(date);

    function nozero(time){
        time=time.toString();
        return time.length<2? "0" + time: time;
    }
}

setInterval(formatDate,1000)

theme.addEventListener("click",()=>{
    darkmode=localStorage.getItem("dark-mode")
    if(darkmode=="disabled"){
        enableDarkMode()
    }
    else{
        disableDarkMode();
    }
})

function enableDarkMode(){
    container.classList.add("darktheme")
    theme.innerHTML="Light mode";
    theme.classList.add("newtheme");
    clock.style.backgroundColor="#ffffff3e"
    clock.style.boxShadow= "0px 0px 15px 3px #ffffff8a"
    hours.classList.add("dark")
    localStorage.setItem("dark-mode","enabled")
}
function disableDarkMode(){
    container.classList.remove("darktheme")
    theme.innerHTML="Dark mode";
    theme.classList.remove("newtheme")
    clock.style.boxShadow= "0px 0px 15px 3px #0000008a"
    theme.classList.remove("darktheme")
    theme.classList.remove("dark")
    hours.classList.remove("dark")
    clock.style.backgroundColor="#0000001e"
    localStorage.setItem("dark-mode","disabled")
}