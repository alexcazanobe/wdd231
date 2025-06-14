import { setFooter, setupHamburger } from "./utils.mjs";
import { renderMembershipCardsAndModals } from "./memberships.mjs";

setFooter();
setupHamburger();
renderMembershipCardsAndModals();  

// Set timestamp before form submit
const joinForm = document.getElementById('joinForm');
if (joinForm) {
    joinForm.addEventListener('submit', () => {
        const timestampInput = document.getElementById('timestamp');
        if (timestampInput) {
            timestampInput.value = new Date().toISOString();
        }
    });
}