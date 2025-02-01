const products = [
    { name: "Basketball", price: 29.99, image: "images/basketball.jpg" },
    { name: "Football", price: 24.99, image: "images/football.jpg" },
    { name: "Tennis Racket", price: 89.99, image: "images/tennis-racket.jpg" },
    { name: "Running Shoes", price: 79.99, image: "images/running-shoes.jpg" },
    { name: "Yoga Mat", price: 19.99, image: "images/yoga-mat.jpg" },
    { name: "Dumbbell Set", price: 49.99, image: "images/dumbbell-set.jpg" },
    { name: "Swimming Goggles", price: 14.99, image: "images/swimming-goggles.jpg" },
    { name: "Badminton Set", price: 34.99, image: "images/badminton-set.jpg" },
  ]
  
  function createProductCard(product) {
    return `
          <div class="product-card">
              <img src="${product.image}" alt="${product.name}" class="product-image">
              <div class="product-info">
                  <h2 class="product-name">${product.name}</h2>
                  <p class="product-price">$${product.price.toFixed(2)}</p>
              </div>
              <button class="add-to-cart">Add to Cart</button>
          </div>
      `
  }
  
  function populateProductGrid() {
    const productGrid = document.getElementById("productGrid")
    products.forEach((product) => {
      productGrid.innerHTML += createProductCard(product)
    })
  }
  
  document.addEventListener("DOMContentLoaded", populateProductGrid)
  
  // Add to cart functionality (for demonstration purposes)
  document.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("add-to-cart")) {
      const productName = e.target.closest(".product-card").querySelector(".product-name").textContent
      alert(`${productName} added to cart!`)
    }
  })
  
  