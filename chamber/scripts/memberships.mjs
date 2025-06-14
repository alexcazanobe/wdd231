export const memberships = [
    {
        id: "np",
        title: "Community Membership",
        annual_cost: 0,
        eligibility: "Non-profit organizations and community groups",
        benefits: [
            "Invitation to quarterly networking breakfasts",
            "Access to online resource library",
            "Community project collaboration opportunities",
            "Basic listing in member directory"
        ]
    },
    {
        id: "bronze",
        title: "Bronze Membership",
        annual_cost: 180,
        eligibility: "Small businesses and startups",
        benefits: [
            "All Community benefits",
            "Discounted booth at local expos",
            "One featured post on Chamber social media",
            "Access to business development webinars"
        ]
    },
    {
        id: "silver",
        title: "Silver Membership",
        annual_cost: 420,
        eligibility: "Growing businesses and organizations",
        benefits: [
            "All Bronze benefits",
            "Priority placement in member directory",
            "Two free tickets to annual business summit",
            "Spotlight article in Chamber newsletter",
            "Discounted advertising in Chamber magazine"
        ]
    },
    {
        id: "gold",
        title: "Gold Membership",
        annual_cost: 950,
        eligibility: "Established businesses and sponsors",
        benefits: [
            "All Silver benefits",
            "Logo on Chamber homepage",
            "VIP invitations to exclusive events",
            "Unlimited job postings on Chamber site",
            "Personalized business consultation session"
        ]
    }
];

export function renderMembershipCardsAndModals() {
    const container = document.createElement("div");
    container.className = "membership-cards";

    memberships.forEach((level, i) => {
        // Card
        const card = document.createElement("div");
        card.className = "membership-card";
        card.id = `card-${level.id}`;
        card.style.animationDelay = `${0.2 * i}s`;
        card.innerHTML = `
            <h3>${level.title}</h3>
            <p>Annual Cost: $${level.annual_cost}</p>
            <p>${level.eligibility}</p>
            <a href="#modal-${level.id}" class="modal-link" data-modal="modal-${level.id}">See Benefits</a>
        `;
        container.appendChild(card);

        // Modal
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.id = `modal-${level.id}`;
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" data-close="modal-${level.id}">&times;</span>
                <h2>${level.title} Benefits</h2>
                <ul>
                    ${level.benefits.map(b => `<li>${b}</li>`).join("")}
                </ul>
            </div>
        `;
        document.body.appendChild(modal);
    });

    const joinContent = document.querySelector('.join-content');
    if (joinContent) {
        joinContent.appendChild(container);
    }

    // Modal event handlers
    document.querySelectorAll('.modal-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'block';
        });
    });
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.dataset.close;
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'none';
        });
    });
    window.addEventListener('click', function(event) {
        document.querySelectorAll('.modal').forEach(modal => {
            if (event.target === modal) modal.style.display = "none";
        });
    });
}