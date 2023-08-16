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
  var dif = Math.round(today-birthday);
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