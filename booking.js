document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault()
  const sport = document.getElementById("sportType").value
  const date = document.getElementById("bookingDate").value
  const time = document.getElementById("bookingTime").value
  const duration = document.getElementById("duration").value

  // Here you would typically send this data to your server to process the booking
  // For this example, we'll just show an alert
  alert(`Booking confirmed for ${sport} on ${date} at ${time} for ${duration} hour(s).`)
})

