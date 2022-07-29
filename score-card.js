
// debugger

let shutDown = confirm("Do you want to Log Out?")

if (shutDown === true) {
    console.log("See you later💪🏼")
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
    const newExercise = new DayExercise(ejercicio, roundRep, weight, time);
    console.log(newExercise);
}


// Need to add Array function to enable to save new DayExercise.