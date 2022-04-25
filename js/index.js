/* functions */

// classic functions

// function logFunc(username){
//     console.log('Hello world '+username)
// }

// arrow function 

const logFunc = (username)=>{
    console.log('Hello world '+username)
}
// appel 
logFunc("Soufiane")



/* Some array functions */

let students = [
    {name: "Youssef" , formation: "ReactJs" , age: 25},
    {name: "Noor" , formation: "ReactJs" , age: 22},
    {name: "Mohamed" , formation: "ReactJs" , age: 28},
    {name: "Soufiane" , formation: "ReactJs" , age: 25},
]


// find age = 25

let student25 =  students.find( (student)=> student.age == 25)

console.log('student25:', student25)

// filter age = 25

let students25 =  students.filter( (student, index)=> student.age == 25)

console.log('students25:', students25)



// findIndex age = 25

let indexOf22 =  students.findIndex((student)=> student.age == 22)

console.log('indexOf22:', indexOf22)

students[indexOf22]
// forEcah

students.forEach( (student , index)=>{
    if(student.age == 25)  student.level = "FS-23"

    if(indexOf22 == index) student.pseudo = "Nrjj"
})
console.log('students after forEach:', students)

//  splice

 let deletedStudents = students.splice(2,3)

 console.log('deletedStudents:', deletedStudents)
 console.log('students:', students)


// redius age

// - width forEach

let totalAge = 0

let all = students.forEach( student =>{
    totalAge += student.age
    return totalAge
})


console.log('all:', all)
console.log('totalAge:', all,  totalAge)


// - with reduce
let totalAgeWithReduce = students.reduce((total,student)=>{
    console.log(total , student)

    return total+=student.age
},0)

console.log('totalAgeWithReduce:', totalAgeWithReduce)


/*  map */

students.map(student => console.log('student:', student ))


/* map usage for list in react */
// function Student(props){
//     return <h1>Welcome {props.name}</h1>
// }


// function List(){
//     let students = []
//     return (
//         <div>
//             {
//                 students.map(student => <Student />)
//             }
//         </div>
//     )
// }



/**** CLASSES  ******/
console.log("---------------- class ------------------")
let article1 = { name: "Camera nikon", color: "block", description:"NIKON", image:"https://fs323.com/image2.png", displayName: function() { 
    console.log("Hello i'm "+this.name)
} }

console.log('name:', article1.name)
console.log('name:', article1.displayName())


class Article {
    constructor(name , color , description , image , taille ){
             this.name = name ;
             this.color = color;
             this.description = description ;
             this.image = image;
             this.taille = taille;
    }

    displayName() { 
        console.log("Hello i'm "+this.name)
    }
   
}

class Table extends Article {
     constructor(name , color , description , image){
         super(name , color , description , image)

     }
}

let article2 = new Article("Camera nikon", "black", "nikon" , "https://fs323.com/image2.png")

let table = new Table("Table 1", "maron", "table 1", "image")

let article3 = new Article("Article 1")

console.log('typeof article 2', typeof article2)
console.log('article1:', article1)
console.log('article2:',article2)
console.log('table:',table)

table.displayName()


/** spread operation  */


let obj1 = {name: "Noor", formation: "ReactJS"}

// let obj2 = {}
// obj2.name = obj1.name
// obj2.formation = obj1.formation



// let obj2 = {name: "Noor", formation: "ReactJs", age: "", classA:""}

// - with ES6

obj2 = {...obj1 ,}
console.log('obj2:', obj2)
let array1 = [{name: "John", age: 12}, {name: "Khalid", age: 33}]
let array2 = [{name: "Carl", age: 22}, {name: "Jane", age: 43}]

let array3 = [...array1 ,  ...array2]

console.log('array3', array3)


/*** destruration */

let user1 = {token: "yuuur884511dnjjhhd" , email: "carl@carl.org" , username: "Karldev"}
let numbers = [1,2,3,5,2,1];

const [nb1 ,nb2 ,,nb3] = numbers

// classique
// let token = user1.token
// let email = user1.email

// console.log('tokern - email ', token , email)


// ES6 

const {email ,token ,  } = user1

console.log('tokern - email ', token , email)


/** Module */
// see module1.js file and main.js 

