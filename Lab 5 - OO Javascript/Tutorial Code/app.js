




// //object literals
//
// function CourseF(name , code){
//     this.name = name;
//     this.code = code;
// }
//
// class CourseC{
//     constructor(name, code) {
//         this.name = name;
//         this.code = code;
//     }
// }
//
// let cCourse = new CourseC("Data Structures" , "CMPS303")
// let fCourse = new CourseF("Data Structures" , "CMPS303");
//
//
//
// let course1 =  {
//     name : "Enterprise App Dev.",
//     code : "CMPS-356",
//     display : function display() {
//         console.log(`Name ${this.name} Code : ${this.code}`);
//     }
// }
// var student = "ali";
// let course2 =  {
//     name : "Object Oriented Prorgamming",
//     code : "CMPS-251",
//     display() {
//         console.log(`Name ${this.name} Code : ${this.code}`);
//     }
// }
//
// course2.someNewPropery = "Woow";
//
// console.log(course2.someNewPropery);
// course1.display();
// course2.display();
//
//
//

class Course {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
    display() {
        console.log(`Name ${this.name} Code : ${this.code}`);
    }
}

const course = new Course("Data Structures", "CMPS-303");
const course2 = new Course("OOM", "CMPS251");

course.display();
course2.display();


//const student = new Student(123, "Abdulah", 100);

//
// const senior1 = new Senior(123, "Abdulah", 100, 99);
// senior1.registerForSeniorProject();
// senior1.display();












