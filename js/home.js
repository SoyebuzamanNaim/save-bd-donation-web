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
  const para = document.createElement('p');
  para.innerHTML=`<div
      class="container mx-auto rounded outline outline-gray-300 shadow-xl my-6 font-bold p-7 space-y-5"
    >
      ${donationAmount} Taka is Donated for Flood at Noakhali, Bangladesh
    </div>`
    document.getElementById('history-section').appendChild(para)
  const mainBalance = getNumber("main-balance");
  const donationBalance = getNumber("card1-balance");
  document.getElementById("main-balance").innerText =
    mainBalance - donationAmount;
  document.getElementById("card1-balance").innerText =
    donationBalance + donationAmount;

    document.getElementById("pop-congo").classList.remove("hidden").add("flex");
});

// for card2
document.getElementById("card2-btn").addEventListener("click", function () {
    const donationAmount = getNumberInput("card2-input");
    if (donationAmount === null || !enoughMoney(donationAmount)) {
      return;
    }
    const para = document.createElement('p');
    para.innerHTML=`<div
        class="container mx-auto rounded outline outline-gray-300 shadow-xl my-6 font-bold p-7 space-y-5"
      >
        ${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh
      </div>`
      document.getElementById('history-section').appendChild(para)
    const mainBalance = getNumber("main-balance");
    const donationBalance = getNumber("card2-balance");
    document.getElementById("main-balance").innerText =
      mainBalance - donationAmount;
    document.getElementById("card2-balance").innerText =
      donationBalance + donationAmount;
  
      document.getElementById("pop-congo").classList.remove("hidden");
  });

  // for card3
document.getElementById("card3-btn").addEventListener("click", function () {
    const donationAmount = getNumberInput("card3-input");
    if (donationAmount === null || !enoughMoney(donationAmount)) {
      return;
    }
    const para = document.createElement('p');
    para.innerHTML=`<div
        class="container mx-auto rounded outline outline-gray-300 shadow-xl my-6 font-bold p-7 space-y-5"
      >
        ${donationAmount} Taka is Donated for Injured People in Quota Movement, Bangladesh
      </div>`
      document.getElementById('history-section').appendChild(para)
    const mainBalance = getNumber("main-balance");
    const donationBalance = getNumber("card3-balance");

    
    document.getElementById("main-balance").innerText =
      mainBalance - donationAmount;
    document.getElementById("card3-balance").innerText =
      donationBalance + donationAmount;
  
  

    document.getElementById("pop-congo").classList.remove("hidden");
    
  });

  document.getElementById("pop-congo-close").addEventListener('click',function(){
    document.getElementById("pop-congo").classList.add("hidden");
  })