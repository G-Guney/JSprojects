function X() {
    const fisrtDate = document.getElementById('firstDate').value;
    const secondDate = document.getElementById('secondDate').value;

    const startTimestamp = new Date(fisrtDate).getTime();
    const endTimestamp = new Date(secondDate).getTime();

    const difference = endTimestamp - startTimestamp;

    const differenceInDays = Math.round(difference /(1000 * 60 * 60 * 24));

    const dayCountElement = document.getElementById('dayCount');

    dayCountElement.innerHTML = `The difference between the dates is ${differenceInDays} days.`;

}