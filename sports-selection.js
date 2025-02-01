const sports = [
  { name: "Badminton", image: "images/badminton4.jpg" },
  { name: "Cricket", image: "images/cricket.jpg" },
  
  { name: "Table Tennis", image: "images/tabletennis.jpg" },
  { name: "Basketball", image: "images/basketball.jpg" },
  { name: "Football", image: "images/football.jpg" },
 
  { name: "Tennis", image: "images/tennis.jpg" },
  { name: "Esports", image: "images/esports.jpg" },
  { name: "Gymnastics", image: "images/gymnastics.jpg" },
  { name: "Archery", image: "images/archery.jpg" },

  { name: "Swimming", image: "images/swimming.jpg" },
  

]

const sportsGrid = document.getElementById("sportsGrid")
const continueBtn = document.getElementById("continueBtn")

sports.forEach((sport) => {
  const sportItem = document.createElement("div")
  sportItem.className = "card sport-item"
  sportItem.innerHTML = `
    <img src="${sport.image}" alt="${sport.name}" class="sport-image">
    <h3>${sport.name}</h3>
  `
  sportItem.addEventListener("click", () => {
    sportItem.classList.toggle("selected")
  })
  sportsGrid.appendChild(sportItem)
})

continueBtn.addEventListener("click", () => {
  const selectedSports = Array.from(document.querySelectorAll(".sport-item.selected")).map(
    (item) => item.querySelector("h3").textContent,
  )
  if (selectedSports.length > 0) {
    localStorage.setItem("selectedSports", JSON.stringify(selectedSports))
    window.location.href = "home.html"
  } else {
    alert("Please select at least one sport")
  }
})

window.addEventListener("click", () => {
  const selectedSports = localStorage.getItem("selectedSports")
  if (selectedSports) {
    window.location.href = "home.html"
  }
})

