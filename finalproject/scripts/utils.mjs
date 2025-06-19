export function setFooter() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
}

export function setupHamburger() {
    const hamButton = document.getElementById('hamButton');
    const navBar = document.getElementById('navBar');
    const navUl = navBar ? navBar.querySelector('ul') : null;
    if (hamButton && navUl) {
        hamButton.addEventListener('click', () => {
            navUl.classList.toggle('show');
            hamButton.classList.toggle('open');
        });
    }
}