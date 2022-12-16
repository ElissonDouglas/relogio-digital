const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const data = document.querySelector('p.data-hoje')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let day = dateToday.getDay();

    switch (day) {
        case 0:
            data.textContent = `Domingo, ${dateToday.getDate()} do ${dateToday.getMonth()} de ${dateToday.getFullYear()}`;
            break;
        
        case 1:
            data.textContent = `Segunda-feira, ${dateToday.getDate()} do ${dateToday.getMonth() + 1} de ${dateToday.getFullYear()}`;
            break;
        case 2:
            data.textContent = `Terça-feira, ${dateToday.getDate()} do ${dateToday.getMonth() + 1} de ${dateToday.getFullYear()}`;
            break;
        case 3:
            data.textContent = `Quarta-feira, ${dateToday.getDate()} do ${dateToday.getMonth() + 1} de ${dateToday.getFullYear()}`;
            break;
        case 4:
            data.textContent = `Quinta-feira, ${dateToday.getDate()} do ${dateToday.getMonth() + 1} de ${dateToday.getFullYear()}`;
            break;

        case 5:
            data.textContent = `Sexta-feira, ${dateToday.getDate()} do ${dateToday.getMonth() + 1} de ${dateToday.getFullYear()}`;
            break;
        
        case 6:
        data.textContent = `Sábado, ${dateToday.getDate()} do ${dateToday.getMonth() + 1} de ${dateToday.getFullYear()}`;
        break;
    }

    if (hr < 10) hr = '0' + hr;
    if (hr > 12 && hr < 18) {
        document.body.style.backgroundImage = 'linear-gradient(120deg, #fccb47, rgb(241, 39, 39))'
    } else if (hr > 5 && hr < 12) {
        document.body.style.backgroundImage = 'linear-gradient(120deg, #a7dbd8, #69d2e7'
    } else if (hr >= 18) {
        document.body.style.backgroundImage = 'linear-gradient(120deg, #301860, #001848';
        data.style.color = 'white';
    }



    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
})