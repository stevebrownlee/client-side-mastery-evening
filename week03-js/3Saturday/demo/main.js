const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
  // make a passenger object
  // add it on the bus
  const passenger = {
    name: name,
    wallet: wallet,
    isStruggling: isStruggling
  };

  if (seat === 'back') {
    struggleBus.push(passenger);
  }
  else if (seat === 'front') {
    struggleBus.unshift(passenger);
  }

};

const unloadPassenger = (bus, seat) => {
  // remove a passenger from the bus
  // return the passenger object
  if (seat === 'front') {
    // shift returns the element at the first index
    return bus.shift(); //  Poor Matt 3
  }
  else if (seat === 'back') {
    // pop returns the element at the last index
    return bus.pop(); //  Just Greg
  }
};

const allAboard = (bus) => {
  // loop over the passengers
  // given the bus costs 5 bucks
  // if the passenger can afford it, charge them
  // if NOT kick them off the bus
  const busFare = 5;
  const validPassengers = [];

  bus.forEach((passenger) => {
    if (passenger.wallet >= busFare) {
      passenger.wallet -= busFare;
      validPassengers.push(passenger);
    };
  });

  return validPassengers;

};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const busBuilder = (bus) => {
  // build domString from bus parameter
  let domString = '';
  for (let i = 0; i < bus.length; i++) {
    domString += `<div class="bus-seat">`;
    domString +=   `<h4>${bus[i].name}</h4>`;
    domString +=   `<p>${bus[i].wallet}</p>`;
    domString +=   `<p>${bus[i].isStruggling}</p>`;
    domString += `</div>`;
  };
  printToDom('the-bus', domString);
};

const init = () => {
  addPassenger('Michael', 3, true, 'front');
  addPassenger('Zoe', 20, false, 'back');
  addPassenger('Greg', 4, false, 'back');
  addPassenger('Saul', 12, true, 'front');
  addPassenger('Matt', 5, true, 'front');
  addPassenger('Matt', 15, true, 'front');
  addPassenger('Matt', 3, true, 'front');
  addPassenger('Sarah', 6, true, 'front');

  const firstPassenger = unloadPassenger(struggleBus, 'front');

  const busPeople = allAboard(struggleBus);

  busBuilder(busPeople);
};

init();