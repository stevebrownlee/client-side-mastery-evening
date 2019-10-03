import navbar from './components/navbar/navbar';
import houseButtonGroup from './components/houseButtonGroup/houseButtonGroup';
import studentList from './components/studentList/studentList';

import studentData from './helpers/data/studentData';

import '../styles/main.scss';

const init = () => {
  const students = studentData.getStudents();
  navbar.loadNavbar();
  houseButtonGroup.createHouseButtonGroup();
  studentList.createStudentList(students);
};

init();
