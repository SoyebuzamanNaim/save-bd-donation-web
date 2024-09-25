// donationBtn
document.getElementById("donation-sec").addEventListener("click", function () {
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-sec").classList.remove("bg-lime-300");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("donation-sec").classList.add("bg-lime-300");
});
// historyBtn
document.getElementById("history-sec").addEventListener("click", function () {
  document.getElementById("history-section").classList.remove("hidden");
  document.getElementById("donation-sec").classList.remove("bg-lime-300");
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-sec").classList.add("bg-lime-300");
});
// common use function
function getNumber(num) {
  const number = parseFloat(document.getElementById(num).innerText);
  if (isNaN(number)) {
    alert("Invalid Donation Amount.");
    return null;
  }
  return number;
}

function getNumberInput(num) {
  const number = parseFloat(document.getElementById(num).value);
  if (isNaN(number)) {
    alert("Invalid Donation Amount.");
    return null;
  }
  return number;
}
function enoughMoney(num) {
  const myMoney = getNumber("main-balance");
  if (myMoney === null || num === null || myMoney < num || num < 0) {
    alert("Invalid Donation Amount.");
    return false;
  }
  return true;
}
// for card1
document.getElementById("card1-btn").addEventListener("click", function () {
  const donationAmount = getNumberInput("card1-input");
  if (donationAmount === null || !enoughMoney(donationAmount)) {
    return;
  }

  const mainBalance = getNumber("main-balance");
  const donationBalance = getNumber("card1-balance");
  document.getElementById("main-balance").innerText =
    mainBalance - donationAmount;
  document.getElementById("card1-balance").innerText =
    donationBalance + donationAmount;

  alert("Congratulations! Donation Successful");
});

// for card2
document.getElementById("card2-btn").addEventListener("click", function () {
    const donationAmount = getNumberInput("card2-input");
    if (donationAmount === null || !enoughMoney(donationAmount)) {
      return;
    }
  
    const mainBalance = getNumber("main-balance");
    const donationBalance = getNumber("card2-balance");
    document.getElementById("main-balance").innerText =
      mainBalance - donationAmount;
    document.getElementById("card2-balance").innerText =
      donationBalance + donationAmount;
  
    alert("Congratulations! Donation Successful");
  });

  // for card3
document.getElementById("card3-btn").addEventListener("click", function () {
    const donationAmount = getNumberInput("card3-input");
    if (donationAmount === null || !enoughMoney(donationAmount)) {
      return;
    }
  
    const mainBalance = getNumber("main-balance");
    const donationBalance = getNumber("card3-balance");
    document.getElementById("main-balance").innerText =
      mainBalance - donationAmount;
    document.getElementById("card3-balance").innerText =
      donationBalance + donationAmount;
  
    alert("Congratulations! Donation Successful");
  });

