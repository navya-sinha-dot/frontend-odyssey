document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault()
    // Here you would typically send a request to your server to authenticate the user
    // For this example, we'll just redirect to the sports selection page
    window.location.href = "sports-selection.html"
  })
  
  