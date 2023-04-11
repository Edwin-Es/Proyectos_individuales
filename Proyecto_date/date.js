const fecha=document.getElementById("fecha");
const hora=document.getElementById("hora");

function formatDate(){
    const date=new Date();
    function normalDate(date){
        let day=date.getDate();
        let month=date.getMonth() +1 ;
        let year=date.getFullYear();
        return `${day}/${month}/${year}`
    }
    fecha.innerHTML=normalDate(date);

    function normalHour(date){
        let hour=date.getHours();
        let minute=date.getMinutes();
        let second=date.getSeconds();
        let amOrpm=hour>=12 ? "PM":"AM";
        hour=(hour%12)|| 12;
        hour=nozero(hour);
        minute=nozero(minute);
        second=nozero(second);
        document.getElementById("amorpm").innerHTML=amOrpm;
        return `${hour}:${minute}:${second}`
    }
    hora.innerHTML=normalHour(date);

    function nozero(time){
        time=time.toString();
        return time.length<2? "0" + time: time;
    }
}


setInterval(formatDate,1000)