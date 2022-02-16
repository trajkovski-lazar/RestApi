import { students } from "../data";
import { User } from "../models/user";




export function create(student: User) {

    student.id = createID();
    students.push(student);

    return students;
}

export function update(id : number, student: any) {

    for (let i = 0; i < students.length; i++)
    {
        if (students[i].id === id)
        {
            let propreties = Object.keys(student);
            for (let j = 0; j < propreties.length; j++) {
                let property = propreties[j];
                let updatedStudent = students[i] as any;
                updatedStudent[property] = student[property]; 
            }
        }
    }
    return students;
}

export function remove(id: number) {
    const removedStudentid = students.findIndex((student: User) => student.id === id);
    const removedStudent = students.splice(removedStudentid, 1);
    return removedStudent;
}

export function count() {

    return students.length;
}

export function findOne(id: number) {

    let newStudent: User = {};
    for (let i = 0; i < students.length; i++)
    {
        if (students[i].id == id)
        {
            newStudent = students[i];
        }
    }
    return newStudent;
}

export function find(student: any) {
    let properties = Object.keys(student);
    let studentsArray = [];
    let counter; 

    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < properties.length; j++) {
            let property = properties[j];
            let currentStudent = students[i] as any;
            
            if (currentStudent[property] == student[property]) {
                counter++;
            }
            }
            if (counter === properties.length)
            {
                studentsArray.push(students)
            }
            counter = 0; 
        }
        return studentsArray;
    }

export function createID() {

    const id = students.length + 1;

    return id;
}


