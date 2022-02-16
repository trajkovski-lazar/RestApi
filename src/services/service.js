"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
function create(student) {
    student.id = createID();
    data_1.students.push(student);
    return data_1.students;
}
exports.create = create;
function update(id, student) {
    for (let i = 0; i < data_1.students.length; i++) {
        if (data_1.students[i].id == id) {
            let propreties = Object.keys(student);
            for (let j = 0; j < propreties.length; j++) {
                let property = propreties[j];
                let updatedStudent = data_1.students[i];
                updatedStudent[property] = student[property];
            }
        }
    }
    return data_1.students;
}
exports.update = update;
function remove(id) {
    const removedStudentid = data_1.students.findIndex((student) => student.id === id);
    const removedStudent = data_1.students.splice(removedStudentid, 1);
    return removedStudent;
}
exports.remove = remove;
function count() {
    return data_1.students.length;
}
exports.count = count;
function findOne(id) {
    let newStudent = {};
    for (let i = 0; i < data_1.students.length; i++) {
        if (data_1.students[i].id == id) {
            newStudent = data_1.students[i];
        }
    }
    return newStudent;
}
exports.findOne = findOne;
function find(student) {
    let properties = Object.keys(student);
    let studentsArray = [];
    let counter;
    for (let i = 0; i < data_1.students.length; i++) {
        for (let j = 0; j < properties.length; j++) {
            let property = properties[j];
            let currentStudent = data_1.students[i];
            if (currentStudent[property] == student[property]) {
                counter++;
            }
        }
        if (counter == properties.length) {
            studentsArray.push(data_1.students);
        }
        counter = 0;
    }
    return studentsArray;
}
exports.find = find;
function createID() {
    const id = data_1.students.length + 1;
    return id;
}
exports.createID = createID;
//# sourceMappingURL=service.js.map