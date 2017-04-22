$(document).ready(function(){

  const outputContainer = $("#output");
  const teamContainer = $("#teams");
  const bodyImage = $("#bodyImage");

  const xmenButton = $("#xmen");
  const avengersButton = $("#avengers");
  const guardiansButton = $("#guardians");

  let characters = [];

  const teamsWriteToDOM = (teams) => {  
    let domString = "";
    for (let i = 0; i < teams.length; i++) {
      domString += `<li><button id="team-${teams[i]}" class="btn btn-lg btn-danger">${teams[i].namne}</button></li>`
    }
    outputContainer.append(domString);
  };

  const writeToDOM = (chars) => {
    console.log("characters", chars);
    let domString = "";
    for (let i = 0; i < chars.length; i++) {
      domString += `<div class="col-xs-3">`
      domString += `<div class="panel">`
      domString += `<div class="panel-heading">`
      domString += `<h3 class="panel-title">${chars[i].name}</h3>`
      domString += `</div>`
      domString += `<div class="panel-body">`
      if(chars[i].gender === "Male"){
        domString += `<img class="maleCharImage" src=${chars[i].image}>`
      }else if(chars[i].gender === "Female"){
        domString += `<img class="femaleCharImage" src=${chars[i].image}>`
      } else {
        domString += `<img class="charImage" src=${chars[i].image}>`  
      }
      
      domString += `<p class="charDescription">${chars[i].description}</p>`
      domString += `</div></div></div>`
    }
    outputContainer.html(domString);
  };

  const loadCharacters = () => {
    return new Promise((resolve, reject) => {
      $.ajax("./db/characters.json")
      .done((data) => {
        resolve(data.characters)})
      .fail((error) => {
        console.log(error)
        reject(error)});
    });
  };

  const loadGenders = () => {
    return new Promise((resolve, reject) => {
      $.ajax("./db/genders.json")
      .done((data) => resolve(data.genders))
      .fail((error) => reject(error));
    });
  };

  const loadTeams = () => {
    return new Promise((resolve, reject) => {
      $.ajax("./db/teams.json")
      .done((data) => resolve(data.teams))
      .fail((error) => reject(error));
    });
  };


  // loadTeams().then((teams) => {
  //   teamsWriteToDOM(teams);
  // }).catch((teamError) => {
  //   console.log("teamError", teamError);
  // })


const dataGetter = (buttonId) => {
  Promise.all([loadCharacters(), loadGenders(), loadTeams()])
  .then((results) => {
    let chars = results[0];
    let gends = results[1];
    let tms = results[2];
    let tempArrary = [];

    chars.forEach((char)=>{
      gends.forEach((gend)=>{
        if(gend.id === char.gender_id){
          char.gender = gend.type;
        }
        if(char.gender === 'Male' && char.description.length===0){
          char.description = "1234567890"
        }
        if(char.gender === 'Female' && char.description.length===0){
          char.description = "abcde fghij klmno pqrst uvwxy z"
        }
        tms.forEach((tm)=>{
          if(tm.id === char.team_id){
            char.team = tm.name
          }
        })
      }) 
    })
  characters = chars;
  if(buttonId === "xmen"){
    characters.forEach((char) =>{
      if(char.team_id === 0){
        tempArrary.push(char);
      }
    })
  }else if(buttonId === "avengers"){
    characters.forEach((char) =>{
      if(char.team_id === 1){
        tempArrary.push(char);
      }
    })
  }else if(buttonId === "guardians"){
    characters.forEach((char) =>{
      if(char.team_id === 2){
        tempArrary.push(char);
      }
    })
  }else{
    console.log("that didn't work");
  }

  writeToDOM(tempArrary);
  })
  .catch((errors) => console.log(errors));
};



  xmenButton.click((event)=>{
    // console.log($(event.currentTarget)[0].id);
    dataGetter($(event.currentTarget)[0].id);
    bodyImage.hide();
  });

  avengersButton.click((event)=>{
    dataGetter($(event.currentTarget)[0].id);
    bodyImage.hide();
  });

  guardiansButton.click((event)=>{
    dataGetter($(event.currentTarget)[0].id);
    bodyImage.hide();
  });











});