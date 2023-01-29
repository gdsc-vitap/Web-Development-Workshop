const student = {
    firstName : 'Ashutosh',
    lastName : 'Singh',
    regNo : '20BCI7070',
    branch : 'CSE-AI'
}

// const { firstName , lastName , regNo , branch } = student;

// console.log(firstName)
// console.log(lastName)

function getDetails({ firstName , lastName , regNo , branch })
{
    console.log(firstName)
    console.log(lastName)
}


