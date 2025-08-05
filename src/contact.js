function loadContact() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const header = document.createElement("h1");
  header.textContent = "Contact Us";

  const info = document.createElement("p");
  info.innerHTML = `
    Phone: (123) 456-7890<br>
    Email: info@deliciouseats.com<br>
    Address: 123 Foodie Lane, Flavor Town
  `;

  content.appendChild(header);
  content.appendChild(info);
}

export default loadContact;