export function showVisitMessage(selector = '#visit-message') {
    const msg = document.querySelector(selector);
    if (!msg) return;
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    let text = "";

    if (!lastVisit) {
        text = "Welcome! Let us know if you have any questions.";
    } else {
        const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (days < 1) {
            text = "Back so soon! Awesome!";
        } else if (days === 1) {
            text = "You last visited 1 day ago.";
        } else {
            text = `You last visited ${days} days ago.`;
        }
    }
    localStorage.setItem('lastVisit', now);

    msg.innerHTML = `
        <span>${text}</span>
        <button id="close-visit-msg" aria-label="Close message" style="margin-left:1em;">&times;</button>
    `;

    document.getElementById('close-visit-msg').onclick = () => {
        msg.style.display = 'none';
    };
}