const gridContainer = document.querySelector(".gridContainer")
const birthdayInput = document.getElementById("birthday")


for (let index = 0; index < 4264; index++) {
  let week = document.createElement("div")
  gridContainer.append(week)
  week.classList.add("week")
}

birthdayInput.addEventListener("change", () => {
  console.log('yoo')
  const weeks = document.querySelectorAll(".week")
  for (let index = 0; index < 700; index++) {
    weeks[index].classList.add("highlight")
    
  }
})