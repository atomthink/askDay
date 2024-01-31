function getDayOfWeek() {
    let date = parseInt(document.getElementById("date").value);
    let month = parseInt(document.getElementById("month").value);
    let resultElement = document.getElementById("result");

    // Validate input
    if (isNaN(date) || isNaN(month) || date < 1 || date > 31 || month < 1 || month > 12) {
        resultElement.innerHTML = "Invalid input. Please enter valid date and month.";
        return;
    }

    resultElement.innerHTML = `Given date is ${date}/${month}/2024`;

    // Month chart
    let mm = 0;

    switch (month) {
        case 1:
            mm = 0;
            break;
        case 2:
        case 3:
            mm = 3;
            break;
        case 4:
            mm = 6;
            break;
        case 5:
            mm = 1;
            break;
        case 6:
            mm = 4;
            break;
        case 7:
            mm = 6;
            break;
        case 8:
            mm = 2;
            break;
        case 9:
            mm = 5;
            break;
        case 10:
            mm = 0;
            break;
        case 11:
            mm = 3;
            break;
        case 12:
            mm = 5;
            break;
        default:
            resultElement.innerHTML = "Invalid month";
            return;
    }

    let sum = 24 + date + mm + 6 + 6;
    let ans = sum % 7;

    if (month === 1 || month === 2) {
        ans = ans - 1;
    }

    switch (ans) {
        case 1:
            resultElement.innerHTML += "<br>Day of the week: Monday";
            break;
        case 2:
            resultElement.innerHTML += "<br>Day of the week: Tuesday";
            break;
        case 3:
            resultElement.innerHTML += "<br>Day of the week: Wednesday";
            break;
        case 4:
            resultElement.innerHTML += "<br>Day of the week: Thursday";
            break;
        case 5:
            resultElement.innerHTML += "<br>Day of the week: Friday";
            break;
        case 6:
            resultElement.innerHTML += "<br>Day of the week: Saturday";
            break;
        case 0:
            resultElement.innerHTML += "<br>Day of the week: Sunday";
            break;
        default:
            resultElement.innerHTML += "<br>Not available";
            break;
    }
}
