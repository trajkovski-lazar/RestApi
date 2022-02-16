
import { find, remove, update } from './src/services/service';
import { create } from './src/services/service';
import { findOne } from './src/services/service';



const student = {
        
        firstName: "Bozidar",
        lastName: "Kirovski",
    
}

let student5 = remove(2);

console.log(student5);


let student1 = update(1, student);

console.log(student1);