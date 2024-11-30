class Student{
    constructor({name, age, grades = []}){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }
    addGrade(...newGrades){
        this.grades = [...this.grades, ...newGrades]
    }
    getAverage(){
        const suma = this.grades.reduce((acc, grade) => acc + grade, 0);
        return(suma / this.grades.length).toFixed(2);
    }
}

const students = [
    new Student({ name: "Maks", age: 17, grades: [4, 5, 3]}),
    new Student({ name: "Tomek", age: 16, grades: [5, 5, 4, 4]}),
];

students[0].addGrade(2,3);
students[1].addGrade(5,6)

students.forEach((student) => {
    console.log(`${student.name}, ${student.age}, oceny: ${student.grades}, srednia: ${student.getAverage()}`)
})