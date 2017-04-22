$(document).ready(function(){

  const outputContainer = $("#output");
  let characters = [];

  const writeToDOM = () => {
    console.log("characters", characters);
    let domString = "";
    for (let i = 0; i < characters.length; i++) {
    }
    outputContainer.append(domString);
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

  Promise.all([loadCharacters(), loadGenders(), loadTeams()])
  .then((results) => {
    let chars = results[0];
    let gends = results[1];
    let tms = results[2];

    chars.forEach((char)=>{
      gends.forEach((gend)=>{
        if(gend.id === char.gender_id){
          char.gender = gend.type;
        }
        tms.forEach((tm)=>{
          if(tm.id === char.team_id){
            char.team = tm.name
          }
        })
      }) 
    })
  characters = chars
  writeToDOM();
  })
  .catch((errors) => console.log(errors));

});