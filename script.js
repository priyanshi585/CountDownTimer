const endDate = "4 October 2024 06:14 PM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input") ;

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    //milliseconds to seconds me convert kiya hai.

    if (diff < 0) {
        return;
    }

    inputs[0].value = Math.floor(diff / 3600 / 24);  //days nikalne ka formula
    inputs[1].value = Math.floor((diff / 3600) % 24);  //hours nikalne ka formula
    inputs[2].value = Math.floor((diff / 60) % 60);  //minutes nikalne ka formula
    inputs[3].value = Math.floor((diff) % 60);  //seconds nikalne ka formula
}

clock();
setInterval(
    () => {
        clock()
    },
    1000
)
