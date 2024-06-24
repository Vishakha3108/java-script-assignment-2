/* Imagin you are given a list of student objects, each containig the student's name and their marks. Your task is to create a function that checks results by filtering out students whose score is more than 900 and prints a message saying, "congratulations[student name]! you have cleared the exam."*/

const students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 99,
    },
];


const checkResult = (name) => {
    for (let student of students) {
        if (student.name === name) {
            return student.marks > 90 ? console.log(`congratulations ${student.name} ! You cleared the exam.`)
            : console.log(`Sorry ! You have not cleared the exam.`);
        }
    }
    console.log("Invalid User !!!");
};
checkResult("Mithun")

