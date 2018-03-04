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

    learn(teach: number): number {
        this.learnt += teach;
        console.log('I\'ve learnt: ' + this.learnt);
        return this.learnt;
    }

    question() {
        let question = new Teacher();
        question.answer();
    }
}

class Teacher {
    public knowledge: number;
    constructor(knowledge: number = 100) {
        this.knowledge = knowledge
    }

    teach(teach: number) {
        let learn = new Student();
        learn.learn(teach);
    }

    answer() {
        let learn = new Student();
        learn.learn(1);
    }
}

let student01 = new Student();
let teacher01 = new Teacher();
teacher01.teach(3);
student01.question();