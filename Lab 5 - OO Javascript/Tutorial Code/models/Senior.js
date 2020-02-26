//inheritance
const Student = require('./Student')
class Senior extends Student{
    constructor(id, name , age, exitExam) {
        super(id, name , age);
        this.exitExam = exitExam;
    }
    registerForSeniorProject(){
        console.log('You are registered');
    }
}

module.exports = Senior;