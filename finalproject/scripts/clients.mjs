export async function loadClients() {
  try {
    const res = await fetch('data/clients.json');
    if (!res.ok) throw new Error('Could not load clients data');
    const clients = await res.json();
    const container = document.getElementById('clientsCards');

    function showRandomClients() {
      container.innerHTML = "";
      const shuffled = [...clients];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      const selected = shuffled.slice(0, 3);
      selected.forEach(client => {
        container.innerHTML += `
          <article class="client-card">
            <img src="${client.logo}" alt="${client.name} logo" width="120" height="60" loading="lazy">
            <h3>${client.name}</h3>
            <p>${client.info}</p>
          </article>
        `;
      });
    }

    showRandomClients();
    setInterval(showRandomClients, 15000); 
  } catch (err) {
    console.error("Error loading clients:", err);
  }
}