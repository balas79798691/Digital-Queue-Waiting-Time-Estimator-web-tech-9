const current = document.getElementById("current");
const mine = document.getElementById("mine");
const service = document.getElementById("service");
const counters = document.getElementById("counters");

document.getElementById("calculate").addEventListener("click", () => {
    const currentToken = Number(current.value);
    const myToken = Number(mine.value);
    const averageService = Number(service.value);
    const activeCounters = Number(counters.value);

    if (myToken < currentToken) {
        document.getElementById("minutes").textContent = "Invalid";
        document.getElementById("message").textContent =
            "Your token should be greater than or equal to the current token.";
        return;
    }

    const peopleAhead = Math.max(0, myToken - currentToken);
    const estimated = Math.ceil(
        (peopleAhead * averageService) / activeCounters
    );

    document.getElementById("minutes").textContent =
        `${estimated} minute${estimated === 1 ? "" : "s"}`;

    document.getElementById("message").textContent =
        peopleAhead === 0
        ? "Your token is currently being served."
        : `${peopleAhead} token(s) are ahead of you.`;
});
