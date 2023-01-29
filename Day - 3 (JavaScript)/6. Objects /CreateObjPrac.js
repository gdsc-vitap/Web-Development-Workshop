const student = {
    firstName : 'Ashutosh',
    lastName : 'Singh',
    regNo : '20BCI7070',
    branch : 'CSE-AI'
}

// function introduce(studentObj){
//     console.log(`Hey there, I'm ${studentObj.firstName} ${studentObj.lastName}`)
//     console.log(`My Registration Number is ${studentObj.regNo}`)
//     console.log(`I'm a student of ${studentObj.branch}`)
// }

function introduce(studentObj){
    console.log(`Hey there, I'm ${studentObj['firstName']} ${studentObj['lastName']}`)
    console.log(`My Registration Number is ${studentObj.regNo}`)
    console.log(`I'm a student of ${studentObj.branch}`)
}

introduce(student);