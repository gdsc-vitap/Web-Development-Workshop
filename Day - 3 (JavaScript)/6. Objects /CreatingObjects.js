// Primitive Datatype : undefined , null , boolean , number , string , symbol


const student_1 = {
    name : 'Unga Bunga',
    regNo: '20BCN7070' ,
    branch: 'CSE-NS',
    hobby: 'Photography',
    greetStudent : function(){
        console.log(`Hey there, ${this.name}`)
    }
}

console.log(student_1.name)
console.log(student_1['name'])
student_1.greetStudent();

// const blue = '#00F'
// const orange = '#F60'

// const color = {
//     yellow: '#FF0',
//     blue: blue,
//     orange: orange
// }

// const color = {
//     yellow: '#FF0',
//     blue: '#00F',
//     orange: '#00F'
// }

// const color = {
//     yellow: '#FF0',
//     blue,
//     orange
// }

// Note ** Objects are passed by reference not by value 

// const color2 = color;

// color2.yellow = '#000'

// console.log(color)
// console.log(color2)