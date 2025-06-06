export async function loadSpotLights() {
    const spotlightSection = document.querySelector('.spotlight');
    if (!spotlightSection) return;

    const response = await fetch('../chamber/data/members.json');
    const members = await response.json();

    function getRandomMembers(arr, n) {
        const shuffled = arr.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }

    const SPOTLIGHT_COUNT = 3;

    function showSpotlights() {
        const currentMembers = getRandomMembers(members, SPOTLIGHT_COUNT);
        spotlightSection.innerHTML = '';
        currentMembers.forEach(member => {
            const div = document.createElement('div');
            div.className = 'member-card card spotlight-card';
            div.innerHTML = `
                <img src="${member.image}" alt="${member.name || 'Business'} logo" loading="lazy">
                <div class="spotlight-content">
                    <h3>${member.name || 'Business Name'}</h3>
                    <p class="tagline">${member.tagline || ''}</p>
                    <p><strong>Email:</strong> ${member.email || 'N/A'}</p>
                    <p><strong>Phone:</strong> ${member.phone || 'N/A'}</p>
                    <p><strong>URL:</strong> <a href="${member.website || '#'}" target="_blank">${member.website || 'N/A'}</a></p>
                </div>
`;
            spotlightSection.appendChild(div);
        });
    }

    showSpotlights();
    setInterval(showSpotlights, 5000);
}