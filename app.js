setInterval(countDown, 1000);

function countDown() {
    var today = new Date().getTime();
    var firstRamadan = new Date("March 11, 2024").getTime();

    var diff = firstRamadan - today;

    if(diff < 0){
        return;
    }

    var day = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hour = Math.floor(diff / (1000 * 60 * 60) % 24);
    var min = Math.floor(diff / (1000 * 60) % 60);
    var sec = Math.floor(diff / (1000) % 60);

    document.getElementById("day").value = day;
    document.getElementById("hour").value = hour;
    document.getElementById("min").value = min;
    document.getElementById("sec").value = sec;
}