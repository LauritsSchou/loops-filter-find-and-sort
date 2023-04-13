"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = ["Peter", "Magdalena", "Frederikke", "Oskar", "Rasmus", "Sofie", "Anders", "Birgitte"];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
  {
    name: "Magdalena Maria Otap",
    mail: "mago@kea.dk",
    phone: "77880000",
    title: "Lecturer",
    age: 36,
    image: "https://share.cederdorff.com/images/mago.jpg",
  },
  {
    name: "Birgitte Jensen",
    mail: "birgitte@mail.dk",
    phone: "77226010",
    title: "Senior Lecturer",
    age: 49,
    image: "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
  },
  {
    name: "Dan Nielsen",
    mail: "dan@mail.dk",
    phone: "77226027",
    title: "Lecturer",
    age: 36,
    image: "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
  },
  {
    name: "Rasmus Cederdorff",
    mail: "race@kea.dk",
    phone: "72286318",
    title: "Senior Lecturer",
    age: 33,
    image: "https://share.cederdorff.com/images/race.jpg",
  },
  {
    name: "Martin Hansen",
    mail: "martin@mail.dk",
    phone: "77886620",
    title: "Lecturer",
    age: 34,
    image: "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
  },
  {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
  },
];

const teacher = {
  name: "Peter Lind",
  mail: "petl@kea.dk",
  phone: "77886699",
  title: "Senior Lecturer",
  age: 46,
  image: "https://share.cederdorff.com/images/petl.jpg",
};

// ========== initApp ========== //

function initApp() {
  console.log("initApp: app.js is running 🎉");
  //   console.log(names);
  //   console.log(years);
  //   console.log(teacher);
  //   console.log(teachers);
  //   loopThroughNames();
  //   loopThroughYears();
  //   loopThroughFiveFirstYears();
  //   loopThroughFiveLastYears();
  //   logNumbers();
  //   forOfTeachers();
  //   teachersOver40();
  //   forOfSearchTeacherByName("ras");
  //   forInTeacher();
  //   whileTeachersLength();
  //   whileTeachersIsLecturer();
  //   whileSearchByName("ras");
  //   filterTeachersOver40();
  //   filterTeachersByName("er");
  filterLecturers();
}

// ========== forEach ========== //
function loopThroughNames() {
  names.forEach(showName);
}
function showName(name, index) {
  if (index % 2 === 1) {
    console.log("Every second name in the array", name, index);
  } else {
    console.log(name);
    console.log(index);
  }
}

// ========== for loop ========== //
function loopThroughYears() {
  for (let index = 0; index < years.length; index++) {
    const year = years[index];

    if (index === years.length - 1) {
      console.log("This is the last year in the list", year);
    } else if (year === 2023) {
      console.log("Current year", year);
    } else {
      console.log(year, index);
    }
  }
}
function loopThroughFiveFirstYears() {
  for (let index = 0; index < 5; index++) {
    const year = years[index];
    console.log(year);
  }
}
function loopThroughFiveLastYears() {
  for (let index = years.length - 5; index < years.length; index++) {
    const year = years[index];
    console.log(year);
  }
}
function logNumbers() {
  console.log("logNumbers");
  for (let index = 0; index < 10; index++) {
    console.log(index);
  }
  for (let index = 1; index < 11; index++) {
    console.log(index);
  }
  for (let index = 10; index > -1; index--) {
    console.log(index);
    if (index === 0) {
      console.log("Liftoff!");
    }
  }
  for (let index = 1; index < 20; index += 2) {
    console.log(index);
  }
  for (let index = 1; index < 16777216; index *= 2) {
    console.log(index);
  }
  for (let index = 111; index < 139; index += 3) {
    console.log(index);
  }
  for (let index = 100; index > -1; index -= 10) {
    console.log(index);
  }
}
// ========== for of loop ========== //
function forOfTeachers() {
  for (const teacher of teachers) {
    console.log(teacher);
  }
}
function teachersOver40() {
  const results = [];
  for (const teacher of teachers) {
    if (teacher.age > 40) {
      results.push(teacher);
    }
  }
  console.log(results);
}
function forOfSearchTeacherByName(searchValue) {
  searchValue = searchValue.toLowerCase();
  const results = [];
  console.log(searchValue);
  for (const teacher of teachers) {
    const name = teacher.name.toLowerCase();
    if (name.includes(searchValue)) console.log(teacher);
    results.push(teacher);
  }
}

// ========== for in loop ========== //
function forInTeacher() {
  for (const key in teacher) {
    console.log(key);
    const value = teacher[key];
    console.log(value);
  }
}

// ========== while loops ========== //
function whileTeachersLength() {
  let index = 0;
  while (index < teachers.length) {
    const teacher = teachers[index];
    console.log(teacher);
    index++;
  }
}
function whileTeachersIsLecturer() {
  let index = 0;
  while (index < teachers.length) {
    const teacher = teachers[index];
    if (teacher.title == "Lecturer") {
      console.log(teacher);
    }
    index++;
  }
}
function whileSearchByName(searchValue) {
  searchValue = searchValue.toLowerCase();
  const results = [];
  let index = 0;
  while (index < teachers.length) {
    const teacher = teachers[index];
    let name = teacher.name.toLowerCase();
    if (name.includes(searchValue)) {
      results.push(teacher);
    }
    index++;
  }
  console.log(results);
}

// ========== Filter items: array.filter(...) ========== //
function filterTeachersOver40() {
  const results = teachers.filter(checkAge);
  console.log(results);
}
function checkAge(teacher) {
  return teacher.age > 40;
}

function filterTeachersByName(searchValue) {
  searchValue = searchValue.toLowerCase();
  const results = teachers.filter(matchName);

  function matchName(teacher) {
    return teacher.name.includes(searchValue);
  }
  console.log(results);
  return results;
}
function filterLecturers() {
  const results = teachers.filter(checkLecturer);
  function checkLecturer(teacher) {
    return teacher.title === "Lecturer";
  }
  console.log(results);
  return results;
}
// ========== Sorting: array.sort() ========== //
