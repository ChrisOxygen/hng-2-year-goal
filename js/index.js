// get element by querySelector

const dateView = document.querySelector(".today-date");
const currentTimeView = document.querySelector(".current-time");

// function displayTodaysDate() {
//   const today = new Date();
//   const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   const dateString = today.toLocaleDateString("en-US", options);
//   dateView.textContent = dateString;
// }

// displayTodaysDate();

function displayTodaysDayNameInEnglish() {
  const today = new Date();
  const options = { weekday: "long" };
  const dayName = today.toLocaleDateString("en-US", options);
  dateView.textContent = dayName;
}

displayTodaysDayNameInEnglish();

function displayCurrentUTCTimeOnly() {
  setInterval(() => {
    const now = new Date();
    const currentTimeUTC = now.toISOString().split("T")[1].split(".")[0];
    currentTimeView.textContent = currentTimeUTC;
  }, 1000); // Update every second
}

displayCurrentUTCTimeOnly();
