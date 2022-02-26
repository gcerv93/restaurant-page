import { createHeader, createFooter } from './mainPage.js';
import Pozole from './images/pozole.jpg'
import Tacos from './images/tacos.jpg'
import Torta from './images/torta.jpg'
import Quesa from './images/quesadillas.jpg'

const createMenuItem = (imageSrc, desc, price) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const image = new Image();
  image.src = imageSrc;

  const info = document.createElement('p');
  const description = document.createElement('p');
  description.textContent = desc;
  info.textContent = price;

  menuItem.appendChild(image);
  menuItem.appendChild(description);
  menuItem.appendChild(info);

  return menuItem;
};

const menuPage = () => {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());

  const centerDiv = document.createElement('div');
  centerDiv.classList.add('menu');

  const torta = createMenuItem(Torta, 'Torta', '9.89');
  const pozole = createMenuItem(Pozole, 'Pozole', '10.89');
  const tacos = createMenuItem(Tacos, 'Tacos', '8.89');
  const quesadilla = createMenuItem(Quesa, 'Quesadillas', '10.89');

  centerDiv.appendChild(torta);
  centerDiv.appendChild(pozole);
  centerDiv.appendChild(tacos);
  centerDiv.appendChild(quesadilla);

  content.appendChild(centerDiv);
  
  content.appendChild(createFooter());
  return content;
};

export default menuPage;
