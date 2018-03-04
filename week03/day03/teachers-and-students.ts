'Use strict';

// Create Student and Teacher classes
// Student
// learn()
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer()

class Student {
    public learnt: number;
    constructor(learnt?: number) {
        this.learnt = 0;
    }

    learn() {
        return this.learnt += 1;
    }

    question(teacher) {
        let question = new Teacher();
        question.answer();
    }
}

class Teacher {
    public knowledge: number;
    constructor(knowledge: number = 100) {
        this.knowledge = knowledge
    }

    teach() {
        let learn = new Student();
        learn.learn();
    }

    answer() {
        let learn = new Student();
        learn.learn();
    }
}

let student01 = new Student();
let teacher01 = new Teacher();
teacher01.teach();
//student01.learn();
console.log(student01);
// console.log(teacher01);