import React, { useState, useEffect } from "react";
import { Circle, X, RotateCcw } from "lucide-react";

// 🔥 Memo cache outside component (important)
const memo = new Map();

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [isDraw, setIsDraw] = useState(false);
  const [animateCell, setAnimateCell] = useState(null);

  // 🎯 difficulty: 0 = easy, 1 = medium, 2 = hard
  const difficulty = 1;

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],[3, 4, 5],[6, 7, 8],
      [0, 3, 6],[1, 4, 7],[2, 5, 8],
      [0, 4, 8],[2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    return { winner: null, line: [] };
  };

  const isBoardFull = (squares) => squares.every((s) => s !== null);

  // 🔥 Optimized minimax with alpha-beta + memo
  const minimax = (squares, depth, isMax, alpha, beta) => {
    const key = squares.join("") + isMax;
    if (memo.has(key)) return memo.get(key);

    const { winner } = calculateWinner(squares);

    if (winner === "O") return 10 - depth;
    if (winner === "X") return depth - 10;
    if (isBoardFull(squares)) return 0;

    let best;

    if (isMax) {
      best = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = "O";
          const score = minimax(squares, depth + 1, false, alpha, beta);
          squares[i] = null;

          best = Math.max(best, score);
          alpha = Math.max(alpha, score);
          if (beta <= alpha) break; // prune
        }
      }
    } else {
      best = Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = "X";
          const score = minimax(squares, depth + 1, true, alpha, beta);
          squares[i] = null;

          best = Math.min(best, score);
          beta = Math.min(beta, score);
          if (beta <= alpha) break; // prune
        }
      }
    }

    memo.set(key, best);
    return best;
  };

  const getBestMove = (currentBoard) => {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < 9; i++) {
      if (!currentBoard[i]) {
        currentBoard[i] = "O";
        const score = minimax(currentBoard, 0, false, -Infinity, Infinity);
        currentBoard[i] = null;

        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };

  // 🎯 Human-like AI move
  useEffect(() => {
    if (!isXNext && !winner && !isDraw) {
      // 🎲 random delay (human feel)
      const delay = Math.random() * 600 + 300;

      setTimeout(() => {
        let move;

        // 🎯 Mistake logic
        const emptyIndexes = board
          .map((v, i) => (v === null ? i : null))
          .filter((v) => v !== null);

        const mistakeChance =
          difficulty === 0 ? 0.6 : difficulty === 1 ? 0.3 : 0.05;

        if (Math.random() < mistakeChance) {
          // ❌ random move (mistake)
          move = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
        } else {
          // ✅ best move
          move = getBestMove([...board]);
        }

        if (move !== -1) {
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
        }
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
    memo.clear(); // 🔥 reset cache
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
            {winner === "X" ? " You Won! " : " Oh..Try again!"}
          </p>
        )}

        {isDraw && (
          <p className="text-md font-semibold text-primary"> Game Draw! </p>
        )}

        <button
          onClick={resetGame}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/30 glass hover:text-primary transition-all duration-300 hover:rotate-180 flex gap-2"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-3 bg-gray-900/30 p-4 rounded-2xl backdrop-blur-sm animate-scaleIn">
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
              {value === "X" && <X className="w-14 h-14 text-primary" />}
              {value === "O" && <Circle className="w-14 h-14 text-white/60" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tictactoe;