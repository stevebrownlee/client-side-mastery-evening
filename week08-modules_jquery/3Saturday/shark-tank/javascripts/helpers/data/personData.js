const persons = [
  { id: 'person1', name: 'Zoe Ames', isDead: false },
  { id: 'person2', name: 'Mary West', isDead: false },
  { id: 'person3', name: 'Luke Lancaster', isDead: false },
  { id: 'person4', name: 'Aaron Lain', isDead: false },
  { id: 'person5', name: 'Anca Simon', isDead: false },
  { id: 'person6', name: 'Beth Whitworth', isDead: false },
  { id: 'person7', name: 'Chris Johnson', isDead: false },
  { id: 'person8', name: 'Davis Lindell', isDead: false },
  { id: 'person9', name: 'David Everett', isDead: false },
  { id: 'person10', name: 'Dylan Rowe', isDead: false },
  { id: 'person11', name: 'Beth Nielsen', isDead: false },
  { id: 'person12', name: 'Joey Petrone', isDead: false },
  { id: 'person13', name: 'John Fleming', isDead: false },
  { id: 'person14', name: 'Jose Marquez', isDead: false },
  { id: 'person15', name: 'Kayla Melton', isDead: false },
  { id: 'person16', name: 'Kenny McEastland', isDead: false },
  { id: 'person17', name: 'Liza Star', isDead: false },
  { id: 'person18', name: 'Michele Rawlins', isDead: false },
  { id: 'person19', name: 'Monique Bass', isDead: false },
  { id: 'person20', name: 'Ola Oladinni', isDead: false },
  { id: 'person21', name: 'Sarah Holder', isDead: true },
  { id: 'person22', name: 'Stephen Castaneda', isDead: true },
  { id: 'person23', name: 'Steven Zelenak', isDead: true },
  { id: 'person24', name: 'Todd Spainhour', isDead: true },
  { id: 'person25', name: 'Zac Crumpton', isDead: true }
];

const getAlivePersons = () => {
  return persons.filter((x) => x.isDead === false);
};

const getDeadPersons = () => {
  return persons.filter((x) => x.isDead === true);
};

const randomMurder = () => {
  // this function only kills people who are alive
  const alivePeople = getAlivePersons();
  const randomNum = Math.floor(Math.random() * alivePeople.length);
  const deadPersonsId = alivePeople[randomNum].id;  //person7
  const deadMan = persons.findIndex((x) => x.id === deadPersonsId);
  persons[deadMan].isDead = true;
}

export default { getAlivePersons, getDeadPersons, randomMurder };
