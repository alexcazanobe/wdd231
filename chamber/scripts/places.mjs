export async function loadDiscoverCards() {
    try {
        const res = await fetch('data/discover.json');
        const items = await res.json();
        const grid = document.getElementById('discoverGrid');
        items.forEach(item => {
            grid.innerHTML += `
                <article class="discover-card">
                    <h2>${item.title}</h2>
                    <figure>
                        <img src="${item.image}" alt="${item.title}">
                    </figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button>Learn more</button>
                </article>
            `;
        });
    } catch (err) {
        console.error("Error loading discover cards:", err);
    }
}

