import getBoards from '../../helpers/data/boardData';
import getBoardsPins from '../../helpers/data/pinData';
import showBoards from '../boards';
import showPins from '../pins';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // ADD CLICK EVENT FOR VIEWING A BOARD'S PINS
    if (e.target.id.includes('view-board-btn')) {
      const boardId = e.target.id.split('--')[1];
      getBoardsPins(boardId).then((pinsArray) => showPins(pinsArray));
    }

    // ADD CLICK EVENT FOR GOING BACK TO ALL BOARDS
    if (e.target.id.includes('back-to-boards')) {
      getBoards(user).then((boards) => showBoards(boards));
    }
  });
};

export default domEvents;