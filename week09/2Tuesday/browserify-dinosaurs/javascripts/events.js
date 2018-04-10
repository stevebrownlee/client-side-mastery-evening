'use strict';

const dinoCards = document.getElementsByClassName('dino');

const showPic = (e) => {
  const dinoType = e.target.children[0].children[0].children[0];
  const dinoImg = e.target.children[0].children[0].children[1];

  dinoType.classList.add('hide');
  dinoImg.classList.remove('hide');
};

const hidePic = (e) => {
  const dinoType = e.target.children[0].children[0].children[0];
  const dinoImg = e.target.children[0].children[0].children[1];

  dinoType.classList.remove('hide');
  dinoImg.classList.add('hide');
};

const addEvents = () => {
  for (let i = 0; i < dinoCards.length; i++) {
    dinoCards[i].addEventListener('mouseenter', showPic);
    dinoCards[i].addEventListener('mouseleave', hidePic);
  }
};

module.exports = addEvents;
