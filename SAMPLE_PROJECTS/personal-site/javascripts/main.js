import loadContactInfo from './components/contact.js';
import loadProjects from './components/projects.js';
import Routing from './routing.js';

const routes = {
  navToBio: 'bioPage',
  navToTechnologies: 'technologiesPage',
  navToProjects: 'projectsPage'
};

const activateNavLinks = () => {
  const navLinks = document.getElementById('navLinks').childNodes;

  for (let i = 0; i < navLinks.length; i++) {
    const currentNavLink = navLinks[i];

    currentNavLink.addEventListener('click', (e) => {
      let pageToShow = routes[e.target.id];
      Routing.navigateTo(pageToShow);
    });
  };
};


const initializeApp = () => {
  loadContactInfo();
  loadProjects();
  activateNavLinks();
};

initializeApp();