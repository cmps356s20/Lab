class Student {
    constructor(id, name , age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    display(){
        let name = "Ali";
        console.log(`Name ${name} ID : ${this.id}`);
    }
}
module.exports = Student;