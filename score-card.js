
// debugger

let shutDown = confirm("Do you want to Log Out?")

if (shutDown === true) {
    console.log("See you later💪🏼")
}



// This array and function would be use for the selector of "type of exercise" in the score-card.html.

const typeExercise=['Functional','Cycling','GYM','Running']

function listExercise () {
    for (let i=0; i < typeExercise.length; i++)
    {console.log (typeExercise[i])}
}




// debugger

class DayExercise {
    constructor(exercise, roundRep, weight, time) {
        this.exercise = exercise;
        this.roundRep = roundRep;
        this.weight = weight;
        this.time = time;
    }
}

function newExercise() {

    let exercise = prompt("Exercise");
    let roundRep = prompt("Rounds, Reps");
    let weight = prompt("Weight");
    let time = prompt("Time, Rounds, Reps");
    
    rutine.push(new DayExercise(exercise, roundRep, weight, time))

    console.table(rutine)
}


// Array to enable save new DayExercise.

const rutine = []

