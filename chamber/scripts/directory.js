// Load and display member data
async function getMembers() {
  try {
    const response = await fetch("../chamber/data/members.json");
    const data = await response.json();
    displayMembersGrid(data); // Muestra grid por defecto
    // Guarda los datos globalmente si quieres alternar sin volver a cargar
    window._members = data;
  } catch (error) {
    console.error("Failed to fetch members:", error);
  }
}

// GRID VIEW
function displayMembersGrid(members) {
  const container = document.querySelector(".companies");
  container.innerHTML = "";
  container.classList.add("grid");
  container.classList.remove("list");

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} Logo" class="member-logo">
      <h2>${member.name}</h2>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Email:</strong> ${member.email || "N/A"}</p>
      <p><strong>Membership:</strong> ${["", "Member", "Silver", "Gold"][member.membership_level]}</p>
      ${member.website ? `<a href="${member.website}" target="_blank">Visit Website</a>` : ""}
    `;
    container.appendChild(card);
  });
}

// LIST VIEW
function displayMembersList(members) {
  const container = document.querySelector(".companies");
  container.innerHTML = "";
  container.classList.add("list");
  container.classList.remove("grid");

  members.forEach(member => {
    const row = document.createElement("section");
    row.classList.add("member-card");
    row.innerHTML = `
        <div>
          <strong>${member.name}</strong><br>
          ${member.address || ""}<br>
          ${member.phone || ""}<br>
          ${member.email || "N/A"}<br>
          ${member.website ? `<a href="${member.website}" target="_blank">Website</a>` : ""}
        </div>
      </div>
    `;
    container.appendChild(row);
  });
}

// Toggle view
document.getElementById("memberCards").addEventListener("click", () => {
  displayMembersGrid(window._members);
});

document.getElementById("memberList").addEventListener("click", () => {
  displayMembersList(window._members);
});

// Footer year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Run the function
getMembers();

//hamButton functionality
const hamButton = document.getElementById("hamButton");
const navUl = document.querySelector("#navBar ul");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active"); 
    navUl.classList.toggle("show");
});
