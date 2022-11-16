// Imports
import { updateGround, setupGround } from "./helpers/ground.js";
import { updatePlayer, setupPlayer, getPlayerRect, setPlayerLose  } from "./helpers/player.js";
import { updateObstacle, setupObstacle, getObstacleRects } from "./helpers/obstacle.js";
import { updateNft, setupNft, getNftRects } from "./helpers/nft.js";

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
    updateSpeedScale(delta);
    checkIfWeGotNft();

    if (checkLose()) return handleLose();
    lastTime = time;
    window.requestAnimationFrame(update);
}

function checkLose() {
    const playerRect = getPlayerRect();
    return getObstacleRects().some(rect => isCollision(rect, playerRect))
}

function isCollision(rect1, rect2) {
    return (
        rect1.left < rect2.right &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.bottom > rect2.top
    )
}

function checkIfWeGotNft() {
    const playerRect = getPlayerRect();
    if (getNftRects().some(rect => isCollision(rect, playerRect))) {
        const nftToRemove = document.querySelectorAll("[data-nft]")[0];
        nftToRemove.remove();
        nftScore += 1;
        nftScoreElem.textContent = `NFT score: ${nftScore}`;
    }
    return getNftRects().some(rect => isCollision(rect, playerRect))
}

function updateSpeedScale(delta) {
    speedScale += delta * SPEED_SCALE_INCREASE;
}

function updateScore(delta) {
    score += delta * 0.01;
    scoreElem.textContent = `Wei score: ${Math.floor(score)}`
}

function handleStart() {
    lastTime = null;
    speedScale = 1;
    score = 0;
    setupGround();
    setupPlayer();
    setupObstacle();
    setupNft();
    startScreenElem.classList.add("hide");
    // call this only when screen refershes
    window.requestAnimationFrame(update);
}

function handleLose() {
    window.totalNFTScore += nftScore;
    window.totalGweiScore += Math.floor(score);
    nftScore = 0;

    nftTotalScoreElem.textContent = `NFT total score: ${window.totalNFTScore}`;
    gweiTotalScoreElem.textContent = `Wei total score: ${window.totaGweiScore}`;
    nftScoreElem.textContent = `NFT Score: ${nftScore}`;

    setPlayerLose()

    setTimeout(() => {
        document.addEventListener("keydown", handleStart, {once: true});
        startScreenElem.classList.remove("hide");
    }, 100)
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
const nftScoreElem = document.querySelector("[data-nft-score]");

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

window.totalNFTScore = 0;
window.totalGweiScore = 0;

// Animate frames
window.requestAnimationFrame(update);