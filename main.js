const gridContainer = document.querySelector(".gridContainer")
const birthdayInput = document.getElementById("birthday")


for (let index = 0; index < 4264; index++) {
  let week = document.createElement("div")
  gridContainer.append(week)
  week.classList.add("week")
}

const weeks = document.querySelectorAll(".week")

function calculateWeeks() {
  const today = new Date()
  const birthday = new Date(birthdayInput.value)
  let dif = Math.round(today-birthday);
  return (Math.round(dif/1000/60/60/24/7));
}



birthdayInput.addEventListener("change", () => {
  // clean previous highlights
  for (let index = 0; index < 4264; index++) {
    weeks[index].classList.remove("highlight")
    
  }
  // set new hightlights
  for (let index = 0; index < calculateWeeks(); index++) {
    weeks[index].classList.add("highlight")
  }
})

// Add weeks ::before elements
const weeksToGenerate = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

weeksToGenerate.forEach(weekNumber => {
  const style = document.createElement('style');
  style.textContent = `
    .week:nth-child(${weekNumber})::before {
      position: absolute;
      content: "${weekNumber}";
      top: -20px;
    }
  `;
  document.head.appendChild(style);
});

const intervalData = [
  { interval: 260, content: "5" },
  { interval: 520, content: "10" },
  { interval: 780, content: "15" },
  { interval: 1040, content: "20" },
  { interval: 1300, content: "25" },
  { interval: 1560, content: "30" },
  { interval: 1820, content: "35" },
  { interval: 2080, content: "40" },
  { interval: 2340, content: "45" },
  { interval: 2600, content: "50" },
  { interval: 2860, content: "55" },
  { interval: 3120, content: "60" },
  { interval: 3380, content: "65" },
  { interval: 3640, content: "70" },
  { interval: 3900, content: "75" },
  { interval: 4160, content: "80" }
];

intervalData.forEach(data => {
  const style = document.createElement('style');
  style.textContent = `
    .week:nth-child(${data.interval})::before {
      position: absolute;
      content: "${data.content}";
      left: -22px;
    }
  `;
  document.head.appendChild(style);
});