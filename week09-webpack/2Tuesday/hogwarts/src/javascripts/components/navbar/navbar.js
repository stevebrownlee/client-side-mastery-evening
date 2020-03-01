import utils from '../../helpers/utils';

import './navbar.scss';

const loadNavbar = () => {
  const domString = `
    <nav>
      <a href="#" class="brand">Hogwarts</a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
    </nav>
  `;
  utils.printToDom('nav-container', domString);
};

export default { loadNavbar };
