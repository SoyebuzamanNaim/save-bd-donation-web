
// donationBtn
document.getElementById("donation-sec").addEventListener("click", function () {
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-sec").classList.remove("bg-lime-300");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("donation-sec").classList.add('bg-lime-300');
});
// historyBtn
document.getElementById("history-sec").addEventListener("click", function () {
  document.getElementById("history-section").classList.remove("hidden");
  document.getElementById("donation-sec").classList.remove("bg-lime-300");
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-sec").classList.add('bg-lime-300');
});
