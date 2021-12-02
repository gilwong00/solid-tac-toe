import { Component, createEffect, createSignal } from 'solid-js';
import { Board } from './Board';
import { computeWinner } from './utils';
import styles from './App.module.css';

const App: Component = () => {
  const [board, setBoard] = createSignal<Array<string>>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = createSignal<boolean>(true);
  const [gameWinner, setGameWinner] = createSignal<string>('');

  createEffect(() => {
    const winner = computeWinner(board());
    if (winner) setGameWinner(winner);
  });

  const handleClick = (square: number) => {
    const currentBoard = [...board()];

    // If user click an occupied square or if game is won, return
    if (gameWinner() || currentBoard[square]) return;

    // update board
    currentBoard[square] = isXTurn() ? 'X' : 'O';
    setBoard(currentBoard);
    setIsXTurn(!isXTurn());
  };

  return (
    <div class={styles.container}>
      <h2 class={styles.header}>
        {gameWinner()
          ? 'Winner: ' + gameWinner()
          : 'Current Turn: ' + (isXTurn() ? 'X' : 'O')}
      </h2>

      <Board squares={board()} handleClick={handleClick} />
    </div>
  );
};

export default App;
