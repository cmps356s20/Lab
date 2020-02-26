

const Student = require('./models/Student')
const Senior = require('./models/Senior')
const Junior = require('./models/Junior')


const student = new Student(123, "Abdulah", 100);


const senior1 = new Senior(123, "Abdulah", 100, 99);
const senior2 = new Senior(123, "Abdulah123", 100, 99);
const senior3 = new Senior(123, "Abd213ulah", 100, 99);
const junior = new Junior(123, "Abdu213lah", 100, 99);

const students = [];

students.push(senior1);
students.push(senior1);
students.push(senior1);


senior1.registerForSeniorProject();
senior1.display();
