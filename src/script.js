const startHudButton = document.getElementById('start-hud');
const hudContentDiv = document.querySelector('.hud-content');
const gameContentDiv = document.querySelector('.game-content');
const headerClickDiv = document.querySelector('.header-click');
const optionsButton = document.getElementById('options-button');
const gameBoard = document.getElementById('game-board');
const howPlayButton = document.getElementById('how-play-button');
const howPlayDialog = document.getElementById('how-play-dialog');
const closeHowPlayDialog = document.querySelector('.top-dialog svg');
const creditsButton = document.getElementById('credits-button');
const creditsDialog = document.getElementById('credits-dialog');
const closeCreditsDialog = document.querySelector('#credits-dialog .top-dialog svg');
const winDialog = document.getElementById('win-dialog');
const closeWinDialog = document.querySelector('#win-dialog .top-dialog svg');
const tieDialog = document.getElementById('tie-dialog');
const closeTieDialog = document.querySelector('#tie-dialog .top-dialog svg')

const toggleDisplay = (element, state) => {
    if (element) element.style.display = state;
};

const closeDialog = (dialog) => toggleDisplay(dialog, 'none');

startHudButton?.addEventListener('click', () => {
    hudContentDiv?.remove();
    toggleDisplay(gameContentDiv, 'grid');
});

optionsButton?.addEventListener('mouseover', () => toggleDisplay(headerClickDiv, 'flex'));
headerClickDiv?.addEventListener('mouseleave', () => toggleDisplay(headerClickDiv, 'none'));

howPlayButton?.addEventListener('click', () => toggleDisplay(howPlayDialog, 'flex'));
closeHowPlayDialog?.addEventListener('click', () => closeDialog(howPlayDialog));

creditsButton?.addEventListener('click', () => toggleDisplay(creditsDialog, 'flex'));
closeCreditsDialog?.addEventListener('click', () => closeDialog(creditsDialog));

closeWinDialog?.addEventListener('click', () => closeDialog(winDialog));
closeTieDialog?.addEventListener('click', () => closeDialog(tieDialog));

const TicTacToe = (function () {
    const X = { symbol: 'X', img: '../assets/sword.png' };
    const O = { symbol: 'O', img: '../assets/shield.png' };

    let currentPlayer = X;
    let board = Array(9).fill('');

    const cells = document.querySelectorAll('#game-board div');

    const showWinDialog = () => winDialog.style.display = 'flex'; 

    const showTieDialog = () => tieDialog.style.display = 'flex';

    const play = () => {
        cells.forEach(cell => {
            cell.addEventListener('click', handleCellClick);
        });
    };

    const handleCellClick = (event) => {
        const cell = event.target;
        const index = cell.dataset.index;

        if (!board[index]) {
            board[index] = currentPlayer.symbol;
            cell.innerHTML = `<img src="${currentPlayer.img}"/>`;
            currentPlayer = currentPlayer === X ? O : X;
            checkWinner();
        }
    };

    const checkWinner = () => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                showWinDialog();
                resetBoard();
                return;
            }
        }

        if (!board.includes('')) {
            showTieDialog();
            resetBoard();
        }
    };

    const resetBoard = () => {
        board = Array(9).fill('');
        cells.forEach(cell => {
            cell.innerHTML = ''; 
        });
        currentPlayer = X;
    };

    return { play };
})();

TicTacToe.play();