import React, { useState, useEffect } from "react";
import { Circle, X, RotateCcw } from "lucide-react";

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [isDraw, setIsDraw] = useState(false);
  const [animateCell, setAnimateCell] = useState(null);

  // Check winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return { winner: null, line: [] };
  };

  const isBoardFull = (squares) => {
    return squares.every((square) => square !== null);
  };

  // Minimax algorithm for computer move
  const minimax = (squares, depth, isMaximizing) => {
    const { winner: gameWinner } = calculateWinner(squares);

    if (gameWinner === "O") return 10 - depth;
    if (gameWinner === "X") return depth - 10;
    if (isBoardFull(squares)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (!squares[i]) {
          squares[i] = "O";
          let score = minimax(squares, depth + 1, false);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (!squares[i]) {
          squares[i] = "X";
          let score = minimax(squares, depth + 1, true);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const getBestMove = (currentBoard) => {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < currentBoard.length; i++) {
      if (!currentBoard[i]) {
        currentBoard[i] = "O";
        let score = minimax(currentBoard, 0, false);
        currentBoard[i] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };

  // Computer move
  useEffect(() => {
    if (!isXNext && !winner && !isDraw) {
      setTimeout(() => {
        const bestMove = getBestMove([...board]);
        if (bestMove !== -1) {
          setAnimateCell(bestMove);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[bestMove] = "O";
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
        }
      }, 200);
    }
  }, [isXNext, winner, isDraw]);

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
    <div className="flex flex-col items-center justify-center  p-4 animate-fadeIn ">
      <div className=" mb-2 flex justify-between items-center   w-auto">
        <div className=" glass rounded-xl px-4 py-3 animate-float">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className=" text-xl font-bold">
              <span className="text-primary text-2xl font-bold">Play!!</span>{" "}
              Tic Tac Toe
            </span>
          </div>
        </div>
      </div>
      <div className=" flex gap-2 items-center  mb-4">
        {winner && (
          <div className=" text-center animate-bounceIn">
            <p className="text-md font-semibold animate-pulse text-primary">
              {winner === "X" ? " You Won! " : " Oh..Try again!"}
            </p>
          </div>
        )}

        {isDraw && (
          <div className=" text-center animate-pulse">
            <p className="text-md font-semibold text-primary"> Game Draw! </p>
          </div>
        )}
        <div>
          <button
            onClick={resetGame}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/30 glass hover:text-primary transition-all duration-300 hover:rotate-180 flex gap-2 "
          >
        
            <RotateCcw className="w-5 h-5" />
          </button>{" "}
        </div>
      </div>
      {/* Game Board */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 bg-gray-900/30 p-4 rounded-2xl backdrop-blur-sm animate-scaleIn">
        {board.map((value, index) => {
          const isWinning = winningLine.includes(index);
          const isAnimating = animateCell === index;

          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={!!winner || !!value || isDraw || !isXNext}
              className={`
                w-20 h-20 md:w-24 md:h-24 bg-gray-500/20 rounded-xl flex items-center justify-center 
                transition-all duration-300 relative overflow-hidden
                ${!winner && !value && isXNext ? "hover:bg-primary/10 hover:scale-105 cursor-pointer" : "cursor-default"}
                ${isWinning ? "bg-yellow-500/20 ring-2 ring-yellow-500 animate-winPulse" : ""}
                ${isAnimating ? "animate-pop" : ""}
              `}
            >
              {value === "X" && (
                <X
                  className="w-12 h-12 md:w-14 md:h-14 text-primary animate-scaleIn"
                  strokeWidth={1.5}
                />
              )}
              {value === "O" && (
                <Circle
                  className="w-12 h-12 md:w-14 md:h-14 text-white/60 animate-scaleIn"
                  strokeWidth={1.5}
                />
              )}
              {!value && isXNext && !winner && !isDraw && (
                <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes pop {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
            background: rgba(var(--color-primary), 0.2);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes winPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.7);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 0 10px rgba(234, 179, 8, 0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 0.5s ease-out;
        }

        .animate-pop {
          animation: pop 0.2s ease-out;
        }

        .animate-winPulse {
          animation: winPulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Tictactoe;
