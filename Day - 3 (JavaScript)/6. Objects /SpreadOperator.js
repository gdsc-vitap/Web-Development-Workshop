const student = {
    firstName : 'Ashutosh',
    lastName : 'Singh',
    regNo : '20BCI7070',
    branch : 'CSE-AI'
}

const updatedDetails = {
    ...student,
    lastName : 'Patel',
    cgpa : 8.93
}

console.log(student)
console.log(updatedDetails)