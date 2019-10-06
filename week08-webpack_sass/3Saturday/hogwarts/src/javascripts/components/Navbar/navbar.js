import utilities from '../../helpers/utilities';

import './navbar.scss';

const loadNavbar = () => {
  const newString = `
    <nav>
      <a href="#" class="brand-logo">Hogwarts</a>
      <ul>
        <li>
          <a>Home</a>
        </li>
      </ul>
    </nav>
  `;
  utilities.printToDom('nav-container', newString);
};

export default { loadNavbar };
