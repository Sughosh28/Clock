document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    setInterval(()=>
    {
        d= new Date();
        hours=d.getHours();
        minutes=d.getMinutes();
        seconds=d.getSeconds();
        hour_rotation=30*hours + minutes/2;
        m_rotation=6*minutes;
        s_rotation=6*seconds;
        console.log(hour)
        hour.style.transform=`rotate(${hour_rotation}deg)`;
        minute.style.transform=`rotate(${m_rotation}deg)`;
        second.style.transform=`rotate(${s_rotation}deg)`;
    
    }, 1000)
});
