import Icon from './images/github.svg';

const createTabs = () => {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const homeTab = document.createElement('div');
  const menuTab = document.createElement('div');
  const contactTab = document.createElement('div');

  homeTab.textContent = 'Home';
  homeTab.classList.add('tab');
  homeTab.setAttribute('id', 'home');
  homeTab.classList.add('active');

  menuTab.textContent = 'Menu';
  menuTab.classList.add('tab');
  menuTab.setAttribute('id', 'menu');

  contactTab.textContent = 'Contact Us';
  contactTab.classList.add('tab');
  contactTab.setAttribute('id', 'contact');

  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(contactTab);

  return tabs;
};

const createHeader = () => {
  const header = document.createElement('header');

  header.textContent = 'La Abuelita';

  header.appendChild(createTabs());

  return header;
};

const createCenterDiv = () => {
  const center = document.createElement('div');
  center.classList.add('center');

  const para1 = document.createElement('p');
  const para2 = document.createElement('p');

  para1.textContent = 'An authentic mexican taste';
  para2.textContent = 'est. 1958';

  center.appendChild(para1);
  center.appendChild(para2);

  return center;
};

const createFooter = () => {
  const footer = document.createElement('footer');

  const para = document.createElement('p');
  para.textContent = 'Created by '

  const link = document.createElement('a');
  link.textContent = 'gcerv93';
  link.href = 'https://github.com/gcerv93';
  link.target = '_blank';

  const myIcon = new Image();
  myIcon.src = Icon;

  para.appendChild(link);
  footer.appendChild(para);
  footer.appendChild(myIcon);

  return footer;
};

function mainPage() {
  const content = document.querySelector('#content');

  const center = createCenterDiv();
  const footer = createFooter();

  content.appendChild(center);
  content.appendChild(footer);

  return content;
};

export { mainPage, createHeader, createFooter };
