import { useState, useEffect } from "react";
import { Circle, X, RotateCcw } from "lucide-react";

type Player = "X" | "O";

const Tictactoe = () => {
  const [board, setBoard] = useState<Array<Player | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<Player | null>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);
  const [isDraw, setIsDraw] = useState(false);
  const [animateCell, setAnimateCell] = useState<number | null>(null);

  const lines = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6],
  ];

  const calculateWinner = (squares: Array<Player | null>) => {
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    return { winner: null, line: [] };
  };

  const isBoardFull = (squares) => squares.every((s) => s !== null);

  // 🔥 Smart lightweight AI (no recursion)
  const getSmartMove = (currentBoard: Array<Player | null>) => {
    // 1️⃣ Win if possible
    for (let [a, b, c] of lines) {
      const values = [currentBoard[a], currentBoard[b], currentBoard[c]];
      if (values.filter(v => v === "O").length === 2 && values.includes(null)) {
        return [a, b, c][values.indexOf(null)];
      }
    }

    // 2️⃣ Block player
    for (let [a, b, c] of lines) {
      const values = [currentBoard[a], currentBoard[b], currentBoard[c]];
      if (values.filter(v => v === "X").length === 2 && values.includes(null)) {
        return [a, b, c][values.indexOf(null)];
      }
    }

    // 3️⃣ Take center
    if (!currentBoard[4]) return 4;

    // 4️⃣ Take random corner
    const corners = [0, 2, 6, 8].filter(i => !currentBoard[i]);
    if (corners.length) {
      return corners[Math.floor(Math.random() * corners.length)];
    }

    // 5️⃣ Else random
    const empty = currentBoard
      .map((v, i) => (v === null ? i : null))
      .filter((v): v is number => v !== null);

    return empty[Math.floor(Math.random() * empty.length)];
  };

  // 🎯 AI turn
  useEffect(() => {
    if (!isXNext && !winner && !isDraw) {
      const delay = Math.random() * 600 + 300;

      setTimeout(() => {
        const move = getSmartMove([...board]);

        setAnimateCell(move);

        setTimeout(() => {
          const newBoard = [...board];
          newBoard[move] = "O";
          setBoard(newBoard);

          const { winner: gameWinner, line } = calculateWinner(newBoard);
          if (gameWinner) {
            setWinner(gameWinner);
            setWinningLine(line);
          } else if (isBoardFull(newBoard)) {
            setIsDraw(true);
          }

          setIsXNext(true);
          setAnimateCell(null);
        }, 200);
      }, delay);
    }
  }, [isXNext, winner, isDraw, board]);

  const handleClick = (index) => {
    if (winner || board[index] || !isXNext || isDraw) return;

    setAnimateCell(index);

    setTimeout(() => {
      const newBoard = [...board];
      newBoard[index] = "X";
      setBoard(newBoard);

      const { winner: gameWinner, line } = calculateWinner(newBoard);

      if (gameWinner) {
        setWinner(gameWinner);
        setWinningLine(line);
      } else if (isBoardFull(newBoard)) {
        setIsDraw(true);
      } else {
        setIsXNext(false);
      }

      setAnimateCell(null);
    }, 200);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine([]);
    setIsDraw(false);
    setAnimateCell(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 animate-fadeIn">
      <div className="mb-2 flex justify-between items-center w-auto">
        <div className="glass rounded-xl px-4 py-3 animate-float">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-xl font-bold">
              <span className="text-primary text-2xl font-bold">Play!!</span>{" "}
              Tic Tac Toe
            </span>
          </div>
        </div>
      </div>

    <div className="flex gap-2 items-center mb-4">
    {winner && (
      <p className="text-md font-semibold animate-pulse text-primary">
        {winner === "X" ? " You Won! " : " Oh..Try again! "}
      </p>
    )}

    {isDraw && (
      <p className="text-md font-semibold text-primary animate-bounce">
        Game Draw! 
      </p>
    )}

    <button
      onClick={resetGame}
      className="p-2 rounded-full bg-primary/10 hover:bg-primary/30 glass hover:text-primary transition-all duration-300 hover:rotate-180 flex gap-2"
    >
      <RotateCcw className="w-5 h-5" />
    </button>
  </div>


      <div className="grid grid-cols-3 gap-2 md:gap-3 bg-gray-900/80 p-4 rounded-2xl backdrop-blur-sm animate-scaleIn glass">
        {board.map((value, index) => {
          const isWinning = winningLine.includes(index);
          const isAnimating = animateCell === index;

          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={!!winner || !!value || isDraw || !isXNext}
              className={`w-20 h-20 md:w-24 md:h-24 bg-gray-500/20 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden
              ${!winner && !value && isXNext ? "hover:bg-primary/10 hover:scale-105" : ""}
              ${isWinning ? "bg-yellow-500/20 ring-2 ring-yellow-500 animate-winPulse" : ""}
              ${isAnimating ? "animate-pop" : ""}`}
            >
              {value === "X" && (
                <X className={`w-14 h-14 text-primary ${isAnimating ? "animate-popIn" : ""}`} />
              )}
              {value === "O" && (
                <Circle className={`w-14 h-14 text-white/60 ${isAnimating ? "animate-popIn" : ""}`} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tictactoe;