import { Component, For } from 'solid-js';
import { Square } from '../Square';
import styles from './Board.module.css';

interface BoardProps {
  squares: Array<string>;
  handleClick: (square: number) => void;
}

/**
 * If we destructure props here, solidjs will not re-render the component
 * despite props are changing, this is because once props are destructured
 * solidjs will not know what to listen to as apart of thei reactivity.
 */
const Board: Component<BoardProps> = (props: BoardProps) => {
  return (
    <div class={styles.board}>
      <For each={props.squares}>
        {(square, i) => (
          <Square value={square} handleClick={() => props.handleClick(i())} />
        )}
      </For>
    </div>
  );
};

export default Board;
