const goats = [
  {
    id: 'goat1',
    name: 'Billy the Kid',
    age: 2,
    description: 'I like Yoga!',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg',
    isBusy: true,
  },
  {
    id: 'goat2',
    name: 'Wooly',
    age: 85,
    description: 'I like eating grass.',
    imgUrl: 'https://pbs.twimg.com/profile_images/980547001166295041/eBs20xF4.jpg',
    isBusy: true,
  },
  {
    id: 'goat3',
    name: 'Vincent van Goat',
    age: 18,
    description: 'SHHHHHHH',
    imgUrl: 'https://goatyoga.com/wp-content/uploads/goat-yoga-goat-in-pink-tutu-with-unicorn-horn.jpg',
    isBusy: false,
  },
  {
    id: 'goat4',
    name: 'Butter',
    age: 1,
    description: 'RAWRRRR',
    imgUrl: 'https://i.ytimg.com/vi/cEJy2q27hVk/maxresdefault.jpg',
    isBusy: false,
  },
  {
    id: 'goat5',
    name: 'Ramsey',
    age: 0.5,
    description: 'Nope',
    imgUrl: 'https://www.psephizo.com/wp-content/uploads/2018/09/1438297793139.jpeg',
    isBusy: false,
  },
];

const getGoats = () => goats;

const freeGoat = (goatId) => {
  goats.forEach((response) => { // this needs to be response or else eslint rules fail
    if (response.id === goatId) {
      response.isBusy = false;
    }
  });
};

const useGoat = (goatId) => {
  goats.forEach((response) => { // this needs to be response or else eslint rules fail
    if (response.id === goatId) {
      response.isBusy = true;
    }
  });
};

export default { getGoats, freeGoat, useGoat };
