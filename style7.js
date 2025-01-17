/* Let's say you are working for an event management company. AS a web devloper, you need to build a countdown timer for an upcoming event. You need to build a function that calculates the number of days between the current date and the event's start date.*/

function calculateRemainingDays(eventDate) {
    const currentDate = new Date ();
    const eventDateTime = new Date(eventDate);

    const timeDifference = eventDateTime - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (10000 * 60 * 60 * 24 ));

    return daysRemaining;
}
const eventDate = '2023-08-31'
console.log(calculateRemainingDays(eventDate));