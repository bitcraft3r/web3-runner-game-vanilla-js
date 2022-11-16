// Imports


// Define functions 
function setPixelToGameScale() {
    let gameToPixelScale;
    if (window.innerWidth / window.innerHeight < GAME_WIDTH / GAME_HEIGHT) {
        gameToPixelScale = window.innerWidth / GAME_WIDTH 
    } else {
        gameToPixelScale = window.innerWidth / GAME_HEIGHT
    }

    gameElem.style.width = `${GAME_WIDTH * gameToPixelScale}px`;
    gameElem.style.height = `${GAME_HEIGHT * gameToPixelScale}px`;
}

function update(time) {
    if (lastTime == null) {
        lastTime = time;
        window.requestAnimationFrame(update);
        return
    }
    const delta = time - lastTime; // calculate time between frames

    updateGround(delta, speedScale);
    updatePlayer(delta, speedScale);
    updateObstacle(delta, speedScale);
    updateNft(delta, speedScale);
    updateScore(delta);
    updateObstacle(delta);
    checkIfWeGotNft();

    if (checkLose()) return handleLose();
    lastTime = time;
    window.requestAnimationFrame(update);
}

// Game settings
const GAME_WIDTH = 100;
const GAME_HEIGHT = 30;
const SPEED_SCALE_INCREASE = 0.00001;

// DOM
const gameElem = document.querySelector("[data-game]");
const scoreElem = document.querySelector("[data-score]");
const startScreenElem = document.querySelector("[data-start-screen]");
const gweiTotalScoreElem = document.querySelector("[data-wei-total-score]");
const nftTotalScoreElem = document.querySelector("[data-nft-total-score]");
const nfScoreElem = document.querySelector("[data-nft-score]");

// Resize game canvas on screen resize
setPixelToGameScale();
window.addEventListener("resize", setPixelToGameScale);

// Start game handler
document.addEventListener("keydown", handleStart, { once: true }); 

// Initialize variables
let lastTime;
let speedScale;
let score;
let nftScore = 0;

// Animate frames
window.requestAnimationFrame(update);