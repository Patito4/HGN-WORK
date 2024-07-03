

const toggleMobileNavigation = () => {
    hamburgerMenu.classList.toggle("active");
};

const displayTime = () => {
    const hoursUI = document.querySelector(".hours"),
    minutesUI = document.querySelector(".minutes"),
    secondsUI = document.querySelector(".seconds");

    setInterval(() => {
        const todaysDate = new Date(),
        hours = todaysDate.getHours(),
        minutes = todaysDate.getMinutes(),
        seconds = todaysDate.getSeconds();

        hoursUI.textContent = hours.toString().length <= 2 ? String(hours).padStart(2, 0) : hours;
        minutesUI.textContent = minutes.toString().length <= 2 ? String(minutes).padStart(2, 0) : minutes;
        secondsUI.textContent = seconds.toString().length <= 2 ? String(seconds).padStart(2, 0) : seconds;
    }, 1000);
};
  

const displayDate = () => {
    const dayUI = document.querySelector(".day"),
    monthUI = document.querySelector(".month"),
    yearUI = document.querySelector(".year");

    setInterval(() => {
        const todaysDate = new Date(),
        day = todaysDate.getDay(),
        month = todaysDate.getMonth(),
        year = todaysDate.getFullYear();

        dayUI.textContent = day.toString().length <= 2? String(day).padStart(1, 1) : day;
        monthUI.textContent =  month.toString().length <= 2? String(month).padStart(2, 0) : month;
        yearUI.textContent =  year.toString().length <= 2? String(year).padStart(2, 0) : year;
     },);
}



(function loadAllEventListeners() {
    document.addEventListener("DOMContentLoaded", displayTime);
    document.addEventListener("DOMContentLoaded", displayDate);
    hamburgerMenu.addEventListener("click", toggleMobileNavigation);
}) ();

const container = document.querySelector(".container");