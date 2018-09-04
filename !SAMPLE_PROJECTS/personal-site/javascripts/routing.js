const homeView = 'bioPage';

const allPages = document.getElementsByClassName('fullPage');

const navigateTo = (pageToNavigateTo) => {
  for (let i = 0; i < allPages.length; i++) {
    const element = allPages[i];
    element.classList.remove('show');
    element.classList.add('hide');
  }

  document.getElementById(pageToNavigateTo).classList.remove('hide');
  document.getElementById(pageToNavigateTo).classList.add('show');
};

export default { navigateTo };