// Dummy data - in a real application, this would come from a server
const userData = {
    name: "John Doe",
    friends: 150,
    athletes: 25,
    sports: 5,
    bookings: [
      { date: "2023-07-15", event: "Tennis Court Booking" },
      { date: "2023-07-18", event: "Swimming Pool Lane Reservation" },
      { date: "2023-07-22", event: "Basketball Court Booking" },
    ],
    matches: [
      { date: "2023-07-20", event: "Local Tennis Tournament" },
      { date: "2023-07-25", event: "Friendly Basketball Match" },
      { date: "2023-07-30", event: "City Swimming Competition" },
    ],
  }
  
  // Update user information
  document.getElementById("userName").textContent = userData.name
  document.getElementById("friendCount").textContent = userData.friends
  document.getElementById("athleteCount").textContent = userData.athletes
  document.getElementById("sportCount").textContent = userData.sports
  
  // Populate bookings list
  const bookingsList = document.getElementById("bookingsList")
  userData.bookings.forEach((booking) => {
    const li = document.createElement("li")
    li.textContent = `${booking.date}: ${booking.event}`
    bookingsList.appendChild(li)
  })
  
  // Populate matches list
  const matchesList = document.getElementById("matchesList")
  userData.matches.forEach((match) => {
    const li = document.createElement("li")
    li.textContent = `${match.date}: ${match.event}`
    matchesList.appendChild(li)
  })
  
  // Simple calendar implementation
  function createCalendar(elem, year, month) {
    const mon = month - 1 // months in JS are 0..11, not 1..12
    const d = new Date(year, mon)
  
    let table = "<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>"
  
    // spaces for the first row
    // from Monday till the first day of the month
    for (let i = 0; i < d.getDay(); i++) {
      table += "<td></td>"
    }
  
    // cells
    while (d.getMonth() == mon) {
      table += "<td>"
  
      // Check if there's an event on this day
      const eventType = getEventType(d)
      if (eventType) {
        table += `<div class="event-dot ${eventType}"></div>`
      }
  
      table += d.getDate()
      table += "</td>"
  
      if (d.getDay() % 7 == 6) {
        // Sunday, last day of week - new line
        table += "</tr><tr>"
      }
  
      d.setDate(d.getDate() + 1)
    }
  
    // add spaces after last days of month for the last row
    if (d.getDay() != 0) {
      for (let i = d.getDay(); i < 7; i++) {
        table += "<td></td>"
      }
    }
  
    table += "</tr></table>"
  
    elem.innerHTML = table
  }
  
  function getEventType(date) {
    const dateString = date.toISOString().split("T")[0]
    if (userData.bookings.some((booking) => booking.date === dateString)) return "booking"
    if (userData.matches.some((match) => match.date === dateString)) return "match"
    return null
  }
  
  // Create calendar for current month
  const currentDate = new Date()
  createCalendar(document.getElementById("calendar"), currentDate.getFullYear(), currentDate.getMonth() + 1)
  
  // Add some styles for the event dots
  const style = document.createElement("style")
  style.textContent = `
      .event-dot {
          height: 5px;
          width: 5px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 2px;
      }
      .booking {
          background-color: #3498db;
      }
      .match {
          background-color: #e74c3c;
      }
      #calendar td {
          text-align: center;
          padding: 5px;
      }
  `
  document.head.appendChild(style)
  
  