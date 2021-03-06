import firebase from 'firebase/app';
import 'firebase/auth';
import showBoards from '../components/boards';
import domEvents from '../components/events/domEvents';
import navEvents from '../components/events/navEvents';
import home from '../components/home';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import firebaseConfig from './apiKeys';
import { getBoards } from './data/boardData';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      domEvents(user.uid);
      navBar();
      navEvents(user.uid);
      getBoards(user.uid).then((boards) => showBoards(boards));
      logoutButton();
    } else {
      // person is NOT logged in
      navBar();
      home();
      loginButton();
    }
  });
};

export default checkLoginStatus;
