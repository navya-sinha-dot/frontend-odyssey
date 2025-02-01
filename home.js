function createCard(title, content, link) {
    return `
          <div class="card">
              <h3>${title}</h3>
              <p>${content}</p>
              <a href="${link}" class="btn">Read More</a>
          </div>
      `
  }
  
  function populateGrid(gridId, items) {
    const grid = document.getElementById(gridId)
    items.forEach((item) => {
      grid.innerHTML += createCard(item.title, item.content, item.link)
    })
  }
  
  // Dummy data - in a real application, this would come from a server
  const newsItems = [
    {
      title: "New World Record in 100m Sprint",
      content: "Athlete X breaks the 100m world record with a time of 9.45 seconds.",
      link: "news.html#sprint-record",
    },
    {
      title: "Local Team Wins National Championship",
      content: "The underdogs pull off a stunning victory in the final match.",
      link: "news.html#local-team-wins",
    },
    {
      title: "Olympic Committee Announces New Sport",
      content: "E-sports to be included in the next Olympic Games.",
      link: "news.html#esports-olympics",
    },
  ]
  
  const competitionItems = [
    {
      title: "City Marathon",
      content: "Join the annual city marathon. Date: August 15, 2023",
      link: "competitions.html#city-marathon",
    },
    {
      title: "Inter-College Basketball Tournament",
      content: "Compete against the best college teams. Registrations open now!",
      link: "competitions.html#basketball-tournament",
    },
    {
      title: "National Swimming Championship",
      content: "Dive into glory at the national level. Qualifiers start next month.",
      link: "competitions.html#swimming-championship",
    },
  ]
  
  const academyItems = [
    {
      title: "Elite Football Academy",
      content: "Train with former professional players. All age groups welcome.",
      link: "academies.html#football-academy",
    },
    {
      title: "Tennis Masterclass",
      content: "Improve your serve and volley with our intensive weekend program.",
      link: "academies.html#tennis-masterclass",
    },
    {
      title: "Yoga for Athletes",
      content: "Enhance your flexibility and mental focus with our specialized yoga classes.",
      link: "academies.html#yoga-athletes",
    },
  ]
  
  populateGrid("newsGrid", newsItems)
  populateGrid("competitionsGrid", competitionItems)
  populateGrid("academiesGrid", academyItems)
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
  
  