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

  // TOGGLE DARK MODE
  document.querySelector('#dark-mode').addEventListener('click', () => {
    const body = document.querySelector('body').classList;
    if (body.contains('dark-mode')) {
      body.remove('dark-mode');
    } else {
      body.add('dark-mode');
    }
  });
};

export default navEvents;
