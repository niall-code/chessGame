// DRAG AND DROP FUNCTIONS

/**
 * - Hides start buttons
 * - Makes White's pieces initially mobile
*/
function startOfGame() {
    document.getElementById("buttons").style.display = "none";

    let whitePieces = document.getElementsByClassName("fa-regular");
    for (let whitePiece of whitePieces) {
        whitePiece.setAttribute("draggable", "true");
    }
}

/**
 * Gets the ID of a dragged chess piece
*/
function drag(ev) {
    ev.dataTransfer.setData("piece", ev.target.id);
}

/**
 * Lets the spaces receive a released chess piece
*/
function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * Transfers the chess piece to its new square, if validly moved
*/
function drop(ev) {
    ev.preventDefault();

    let pieceID = ev.dataTransfer.getData("piece");
    let piece = document.getElementById(pieceID);

    let square = ev.target.closest("td");

    if (square.children.length) {
        // Cannot take your own piece
        if (square.firstElementChild.classList[0] !== piece.classList[0]) {
            // Take the piece previously occupying a square
            square.replaceChild(piece, square.firstElementChild);
            theirTurn();
        }
    } else {
        square.appendChild(piece);
        theirTurn();
    }
}

/**
 * Immobilises one player's pieces and mobilises their opponent's
*/
function theirTurn() {
    let allPieces = document.getElementsByTagName("i");
    for (let eachPiece of allPieces) {
        if (eachPiece.getAttribute("draggable") === "true") {
            eachPiece.setAttribute("draggable", "false");
        } else {
            eachPiece.setAttribute("draggable", "true");
        }
    }
}

/**
 * Rotates the board, then calls startOfGame()
*/
function startAsBlack() {
    document.getElementsByTagName("table")[0].classList.add("flipped");
    let icons = document.getElementsByTagName("i");
    for (let icon of icons) {
        icon.classList.add("flipped");
    }

    startOfGame();
}
