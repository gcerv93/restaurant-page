import {mainPage, createHeader} from './mainPage.js';
import menuPage from './menuPage.js';
import contactPage from './contactPage.js';
import './styles.css';

(function() {
  // if i don't create the header outside of the page modules, a new header
  // will be created every time a page is loaded, thereby my event listeners
  // won't work. this fixes it
  const content = document.querySelector('#content');
  content.appendChild(createHeader());

  // call mainPage here to make sure it's the first thing that renders
  mainPage();

  // remove everything from content div EXCEPT the header, to make sure I keep
  // the same header through every page
  const clearContent = () => {
    const content = document.querySelector('#content');
    while (content.children[1]) {
      content.removeChild(content.children[1]);
    };
  };

  const removeActive = () => {
    tabs.forEach((tab) => tab.classList.remove('active'));
  };

  // removeActive function removes the underline border for tabs, then I set
  // the click target's class to the underline border class
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      removeActive();
      clearContent();
      e.target.classList.add('active');
      if (e.target.id === 'menu') {
        menuPage();
      } else if (e.target.id === 'contact') {
        contactPage();
      } else if (e.target.id === 'home') {
        mainPage();
      };
    });
  });
})();
