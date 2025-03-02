const positions = document.startPositions;


const Board = () => {
    const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"];
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    return(
        <table>
            <tbody>
                {ranks.map((rank, rankIndex) => (
                    <tr>

                        {files.map((file, fileIndex) => (
                            <td
                                id={`${file}${rank}`}
                                className={(rankIndex + fileIndex) % 2 === 0 ? "light" : "dark"}
                                onDragOver={(e) => allowDrop(e)}
                                onDrop={(e) => drop(e)}
                            >

                                {(startPositions[`${file}${rank}`]) ?
                                    <i
                                        className={startPositions[`${file}${rank}`].classes}
                                        id={startPositions[`${file}${rank}`].pieceID}
                                        onDragStart={(e) => drag(e)}
                                    ></i>
                                : null}

                            </td>
                        ))}

                    </tr>
                ))}
            </tbody>
        </table>
    );
}


const chessBoard = document.getElementById("boardSpace");
ReactDOM.createRoot(chessBoard).render(<Board />);
