import './studentCard.scss';

const createStudentCard = (student, house) => {
  const domString = `
    <li class="student-house-${house.name.toLowerCase()}">
      <div class="img-holder">
        <img class="student-img" src="${student.picture}">
      </div>
      <h3 class="student-name">${student.name}</h3>
    </li>
  `;

  return domString;
};

export default { createStudentCard };
