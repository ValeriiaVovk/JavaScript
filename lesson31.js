const timeToBirthday = setInterval(function () {
  let date = new Date("2023-06-24").getTime();
  let today = new Date().getTime();
  let leftTime = date - today;

  const days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((leftTime % (1000 * 60)) / 1000);

  const left = document.getElementById("toBirthday");
  left.textContent = days + "д " + hours + "г " + minutes + "хв " + seconds + "с";

  if (leftTime < 0) {
    clearInterval(x);
    left.textContent = `Час закінчився`;
  }
}, 1000);
