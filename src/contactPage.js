import { createHeader, createFooter } from './mainPage.js';

const contactPage = () => {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());
  document.querySelector('#contact').classList.add('active');

  const centerDiv = document.createElement('div');
  centerDiv.classList.add('center-contact');

  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'Contact Us';
  const phoneInfo = document.createElement('p');
  phoneInfo.textContent = '012-345-6789';
  const emailInfo = document.createElement('p');
  emailInfo.textContent = 'fakeemail@fakeemail.com';

  centerDiv.appendChild(contactInfo);
  centerDiv.appendChild(phoneInfo);
  centerDiv.appendChild(emailInfo);

  content.appendChild(centerDiv);
  content.appendChild(createFooter());
};

export default contactPage;
