setInterval(() => {
    

    day = new Date();
    hh = day.getHours() * 30;
    mm = day.getMinutes() * deg;
    ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    })

    
   