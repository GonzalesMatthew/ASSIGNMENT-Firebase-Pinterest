import { searchBoard } from '../../helpers/data/boardData';
import showBoards from '../boards';

const navEvents = (user) => {
  // SEARCH BAR KEYSTROKE LISTENING
  document.querySelector('#search-bar').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search-bar').value.toLowerCase();
    if (e.keyCode === 13) {
      searchBoard(user, searchValue).then((boardArray) => {
        showBoards(boardArray);
      });
    }
  });
};

export default navEvents;
