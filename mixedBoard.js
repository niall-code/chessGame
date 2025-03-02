function Board() {

    const MidGround = () => {
        const ranks = ["6", "5", "4", "3"];
        const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

        return (
            ranks.map((rank, rankIndex) => (
                <tr>
                    {files.map((file, fileIndex) => (
                        <td
                            id={`${file}${rank}`}
                            class={(rankIndex + fileIndex) % 2 === 0 ? "light" : "dark"}
                            ondragover="allowDrop(event)"
                            ondrop="drop(event)"
                        ></td>
                    ))}
                </tr>
            ))
        );
    };

    return (
        <>
            <table>
                <tr>
                    <td id="a8" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-rook" id="blackQueensideRook" ondragstart="drag(event)"></i>
                    </td>
                    <td id="b8" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-knight" id="blackQueensideKnight" ondragstart="drag(event)"></i>
                    </td>
                    <td id="c8" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-bishop" id="blackQueensideBishop" ondragstart="drag(event)"></i>
                    </td>
                    <td id="d8" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-queen" id="blackQueen" ondragstart="drag(event)"></i>
                    </td>
                    <td id="e8" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-king" id="blackKing" ondragstart="drag(event)"></i>
                    </td>
                    <td id="f8" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-bishop" id="blackKingsideBishop" ondragstart="drag(event)"></i>
                    </td>
                    <td id="g8" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-knight" id="blackKingsideKnight" ondragstart="drag(event)"></i>
                    </td>
                    <td id="h8" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-rook" id="blackKingsideRook" ondragstart="drag(event)"></i>
                    </td>
                </tr>
                <tr>
                    <td id="a7" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-pawn" id="blackPawnA" ondragstart="drag(event)"></i>
                    </td>
                    <td id="b7" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-pawn" id="blackPawnB" ondragstart="drag(event)"></i>
                    </td>
                    <td id="c7" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-pawn" id="blackPawnC" ondragstart="drag(event)"></i>
                    </td>
                    <td id="d7" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-pawn" id="blackPawnD" ondragstart="drag(event)"></i>
                    </td>
                    <td id="e7" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-pawn" id="blackPawnE" ondragstart="drag(event)"></i>
                    </td>
                    <td id="f7" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-pawn" id="blackPawnF" ondragstart="drag(event)"></i>
                    </td>
                    <td id="g7" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-pawn" id="blackPawnG" ondragstart="drag(event)"></i>
                    </td>
                    <td id="h7" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-solid fa-chess-pawn" id="blackPawnH" ondragstart="drag(event)"></i>
                    </td>
                </tr>

                <MidGround />

                <tr>
                    <td id="a2" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-pawn" id="whitePawnA" ondragstart="drag(event)"></i>
                    </td>
                    <td id="b2" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-pawn" id="whitePawnB" ondragstart="drag(event)"></i>
                    </td>
                    <td id="c2" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-pawn" id="whitePawnC" ondragstart="drag(event)"></i>
                    </td>
                    <td id="d2" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-pawn" id="whitePawnD" ondragstart="drag(event)"></i>
                    </td>
                    <td id="e2" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-pawn" id="whitePawnE" ondragstart="drag(event)"></i>
                    </td>
                    <td id="f2" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-pawn" id="whitePawnF" ondragstart="drag(event)"></i>
                    </td>
                    <td id="g2" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-pawn" id="whitePawnG" ondragstart="drag(event)"></i>
                    </td>
                    <td id="h2" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-pawn" id="whitePawnH" ondragstart="drag(event)"></i>
                    </td>
                </tr>
                <tr>
                    <td id="a1" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-rook" id="whiteQueensideRook" ondragstart="drag(event)"></i>
                    </td>
                    <td id="b1" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-knight" id="whiteQueensideKnight" ondragstart="drag(event)"></i>
                    </td>
                    <td id="c1" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-bishop" id="whiteQueensideBishop" ondragstart="drag(event)"></i>
                    </td>
                    <td id="d1" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-queen" id="whiteQueen" ondragstart="drag(event)"></i>
                    </td>
                    <td id="e1" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-king" id="whiteKing" ondragstart="drag(event)"></i>
                    </td>
                    <td id="f1" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-bishop" id="whiteKingsideBishop" ondragstart="drag(event)"></i>
                    </td>
                    <td id="g1" class="dark" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-knight" id="whiteKingsideKnight" ondragstart="drag(event)"></i>
                    </td>
                    <td id="h1" class="light" ondragover="allowDrop(event)" ondrop="drop(event)">
                        <i class="fa-regular fa-chess-rook" id="whiteKingsideRook" ondragstart="drag(event)"></i>
                    </td>
                </tr>
            </table>
        </>
    );
}


const chessBoard = document.getElementById("boardSpace");
ReactDOM.createRoot(chessBoard).render(<Board />);
