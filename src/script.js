const startHudButton = document.getElementById('start-hud');
const hudContentDiv = document.querySelector('.hud-content');
const gameContentDiv = document.querySelector('.game-content');
const headerClickDiv = document.querySelector('.header-click');
const optionsButton = document.getElementById('options-button');

startHudButton.addEventListener('click', () => {
    hudContentDiv.remove();
    gameContentDiv.style.display = 'grid';
});

optionsButton.addEventListener('mouseover', () => {
    headerClickDiv.style.display = 'flex'; 
});

headerClickDiv.addEventListener('mouseleave', () => {
    headerClickDiv.style.display = 'none';
});
