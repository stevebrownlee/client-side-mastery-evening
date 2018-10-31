import $ from 'jquery';

const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

const createProjectCards = (projects) => {
  let newString = '';
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].available === true) {
      newString += '<div class=\'project\'>';
      newString += `<img src=${projects[i].screenshot}></img>`;
      newString += '<div class=\'projectInfo\'';
      newString += `<h4>${projects[i].title}:</h4>`;
      newString += `<p>${projects[i].description}</p>`;
      newString += `<p>Technologies Used: ${projects[i].technologiesUsed}</p>`;
      newString += `<p><a href='${projects[i].url}'>Project Url</a></p>`;
      newString += `<p><a href='${projects[i].githubUrl}'>GitHub Url</a></p>`;
      newString += '</div>';
      newString += '</div>';
    }
  }
  printToDom(newString, 'projectsPage');
};

const projectPromise = () => new Promise((resolve, reject) => {
  $.get('http://localhost:3001/projects')
    .done((data) => {
      resolve(data);
    })
    .fail((error) => {
      reject(error);
    });
});

const getProjects = () => {
  projectPromise()
    .then((data) => {
      createProjectCards(data);
    })
    .catch((error) => {
      console.log({ error });
    });
};


const pageSelect = (event) => {
  event.preventDefault();
  const pageId = event.srcElement.id;
  const fullPage = document.getElementsByClassName('fullPage');
  for (let i = 0; i < fullPage.length; i += 1) {
    const page = fullPage[i];
    if (page.classList.contains(pageId)) {
      page.style.display = '';
    } else {
      page.style.display = 'none';
    }
  }
};

document.querySelector('.navigation').addEventListener('click', pageSelect);

export default getProjects;
