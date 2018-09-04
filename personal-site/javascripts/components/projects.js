import {printToDom} from './../util.js'

const projects = [
  {
    title: "Boogie And Brush",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-2c55d.appspot.com/o/projects%2F4c.png?alt=media&token=e65789f5-ea42-40fc-bc0d-ec2bc2ac030e",
    description: "The need for this app became clear when the following statistic came across my desk: children only brush their teeth 6 times a week. So, I designed a solution that would motivate children to brush for a full 2 minutes by creating their own 2 minute song, displaying a how-to animation for 2 minutes, and then awarding them with a digital sticker for each brushing (all while including parental monitoring).",
    technologiesUsed: "AngularJS, Firebase Database and Hosting, Sass, Material Design, MomentJS, Angular Sound Manager, Version Control with Github",
    available: true,
    url: "https://boogie-and-brush.firebaseapp.com",
    github: "https://github.com/morecallan/frontend-capstone"
  }
];

const printAllProjects = () => {
  projects.forEach((project) => {
    let domString = `<div class="cardContainer">`;
    
    domString += `
    <div class="card sticky-action">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${project.thumbnail}">
      </div>
      <div class="card-action">
        <span class="card-title activator grey-text text-darken-4">${project.title}<i class="material-icons right">more_vert</i></span>
        <p>${project.technologiesUsed}</p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
        <p>${project.description}.</p>
      </div>
    </div> 
    `;
    domString += `</div>`;
    printToDom('projectsPage', domString);
  });
};

export default printAllProjects;