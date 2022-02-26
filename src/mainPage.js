import Icon from './github.svg';

const createHeader = () => {
  const header = document.createElement('header');

  header.textContent = 'La Abuelita';

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

  const header = createHeader();
  const center = createCenterDiv();
  const footer = createFooter();

  content.appendChild(header);
  content.appendChild(center);
  content.appendChild(footer);

  return content;
};

export default mainPage;
