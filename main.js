"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./src/services/service");
const student = {
    id: 7,
    firstName: "Bozidar",
    lastName: "Kirovski",
};
let student5 = service_1.remove(2);
console.log(student5);
let student1 = service_1.update(1, student);
console.log(student1);
//# sourceMappingURL=main.js.map