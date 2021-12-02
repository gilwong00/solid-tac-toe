import { Component } from 'solid-js';
import styles from './Square.module.css';

interface SquareProps {
  handleClick: () => void;
  value: string;
}

const Square: Component<SquareProps> = ({ handleClick, value }) => {
  return (
    <button class={styles.square} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
