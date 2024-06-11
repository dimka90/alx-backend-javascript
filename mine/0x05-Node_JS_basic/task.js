const persons = [

    {
        name:"Dimka",
        age:30,
        occupation:"student",
        target: "90 million"
    },

    {
        name: "Yilrit",
        age: 25,
        occupation: "student",
        target: "90 million"
    },
    {
        name: "Yilrit",
        age: 25,
        occupation: "student",
        target: "90 million"
    },
    {
        name: "Yilrit",
        age: 25,
        occupation: "farmer",
        target: "90 million"
    },
    {
        name: "Yilrit",
        age: 25,
        occupation: "Surgeon",
        target: "90 million"
    },

    {
        name: "Yilrit",
        age: 25,
        occupation: "student",
        target: "90 million"
    },
    
    {
        name: "Yilrit",
        age: 25,
        occupation: "Surgeon",
        target: "90 million"
    },
    
]
const count = {}
persons.forEach((person) => {
    if (count[person.occupation])
    {
        count[person.occupation] = count[person.age] + 1
    }
    else{
       count[person.occupation] =  1
    }
});
console.log(count)