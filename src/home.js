function loadHome() {
  const content = document.querySelector("#content");

  content.innerHTML = "";

  const header1 = document.createElement("h1");
  header1.textContent = "Welcome to Delicious Eats!";

  const ptext = document.createElement("p");
  ptext.textContent = "Experience the finest cuisine in a cozy atmosphere. Our chefs use only the freshest ingredients to create mouthwatering dishes you'll love. Join us for an unforgettable dining experience!"

  const img = document.createElement("img");
  img.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80";
  img.alt = "Restaurant Interior";
  img.style.maxWidth = "100%";
  img.style.height = "auto";
  img.style.borderRadius = "8px";

  content.appendChild(header1);
  content.appendChild(img);
  content.appendChild(ptext);
}

export default loadHome;