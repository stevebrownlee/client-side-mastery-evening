// Have them do a contact page as HTML first and do JS as a challenge
import {printToDom} from './../util.js'

const contactInfo = {
  email: {
    icon: 'https://image.flaticon.com/icons/svg/71/71148.svg',
    value: 'mailto:callan@morecallan.com'
  },
  github: {
    icon: 'https://image.flaticon.com/icons/svg/71/71106.svg',
    value: 'https://www.github.com/morecallan'
  },
  linkedin: {
    icon: 'https://image.flaticon.com/icons/svg/71/71143.svg',
    value: 'https://www.linkedin.com/in/callanmorrison/'
  },
  twitter: {
    icon: 'https://image.flaticon.com/icons/svg/71/71171.svg',
    value: 'https://twitter.com/morecallan'
  }
}

const printContactInfo = () => {
  let domString = '';
  for (let key in contactInfo) {
    const contactInfoPiece = contactInfo[key];
    domString += `<a class="contact__footer" href="${contactInfoPiece.value}"><img src="${contactInfoPiece.icon}"></a>`;
  }

  printToDom('contactInfo', domString);
}

export default printContactInfo;