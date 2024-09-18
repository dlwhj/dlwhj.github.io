const timestampEl = document.querySelector("#timestamp");
const currentTimeZone = "Asia/Seoul";

const getOrdinalSuffix = (num) => {
    if (num > 3 && num < 21) return "th";
    switch (num % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

const updateTimestamp = () => {
    let time = (new Date).toLocaleTimeString("en-us", { timeZone: currentTimeZone, hour: "numeric", minute: "numeric" });
    let weekday = (new Date).toLocaleDateString("en-us", { timeZone: currentTimeZone, weekday: "long" });
    let day = (new Date).toLocaleDateString("en-us", { timeZone: currentTimeZone, day: "numeric" });
    let month = (new Date).toLocaleDateString("en-us", { timeZone: currentTimeZone, month: "long" });

    timestampEl.innerText = `${time} on ${weekday} the ${day}${getOrdinalSuffix(day)} of ${month}`;
    // TODO: update datetime attribute also
}

updateTimestamp();
setInterval(updateTimestamp, 60000); // update view every minute