let projects = [
  {
    title: "Cool Project1",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },

  {
    title: "Cool Project2",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },

  {
    title: "Cool Project3",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
];

let newString = "";

const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

const pageSelect = () => {
  event.preventDefault();
  let pageId = event.srcElement.id;
  let fullPage = document.getElementsByClassName("fullPage");
  for (let i = 0; i < fullPage.length; i++) {
    let page = fullPage[i];
    if (page.classList.contains(pageId)) {
      page.style.display = "";
    } else {
      page.style.display = "none";
    }
  }
};

const createProjectCards = () => {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
      newString += `<div class="project">`;
      newString += `<img src=${projects[i].screenshot}></img>`;
      newString += `<div class="projectInfo"`;
      newString += `<h4>${projects[i].title}:</h4>`;
      newString += `<p>${projects[i].description}</p>`;
      newString += `<p>Technologies Used: ${projects[i].technologiesUsed}</p>`;
      newString += `<p><a href="${projects[i].url}">Project Url</a></p>`;
      newString += `<p><a href="${projects[i].githubUrl}">GitHub Url</a></p>`;
      newString += `</div>`;
      newString += `</div>`;
    }
  }
  printToDom(newString, "projectsPage");
};

document.querySelector(".navigation").addEventListener("click", pageSelect);

createProjectCards();
