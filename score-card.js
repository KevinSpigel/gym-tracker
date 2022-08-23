// Shut down button

const shutDown = document.querySelector("#out")
shutDown.addEventListener("click", logOut)

function logOut() {
    let goOut = confirm("Are you sure you want to Log Out?")
    if (goOut) {
        location.href = "index.html"
    }
}


// Chronometer

document.addEventListener("DOMContentLoaded", () => {
    const $timeElapsed = document.querySelector("#timeElapsed"),
        $btnStart = document.querySelector("#btnStart"),
        $btnPause = document.querySelector("#btnPause"),
        $btnFlag = document.querySelector("#btnFlag"),
        $btnReset = document.querySelector("#btnReset"),
        $flagContainer = document.querySelector("#flagContainer");
    let benchmarks = [],
        idInterval,
        initialTime = null;
    let timeDiference = 0;

    const hideItem = element => {
        element.style.display = "none";
    }

    const showItem = element => {
        element.style.display = "";
    }

    const addCero = value => {
        if (value < 10) {
            return "0" + value;
        } else {
            return "" + value;
        }
    }

    const milsecToMinutes = (miliSec) => {
        const minutes = parseInt(miliSec / 1000 / 60);
        miliSec -= minutes * 60 * 1000;
        seconds = (miliSec / 1000);
        return `${addCero(minutes)}:${addCero(seconds.toFixed(1))}`;
    };


    const initiate = () => {
        const justNow = new Date();
        initialTime = new Date(justNow.getTime() - timeDiference);
        clearInterval(idInterval);
        idInterval = setInterval(refreshTime, 100);
        hideItem($btnStart);
        hideItem($btnReset);
        showItem($btnFlag);
        showItem($btnPause);
    };
    const pauseTime = () => {
        timeDiference = new Date() - initialTime.getTime();
        clearInterval(idInterval);
        showItem($btnStart);
        hideItem($btnFlag);
        hideItem($btnPause);
        showItem($btnReset);
    };
    const refreshTime = () => {
        const justNow = new Date();
        const diference = justNow.getTime() - initialTime.getTime();
        $timeElapsed.textContent = milsecToMinutes(diference);
    };
    const flagTime = () => {
        benchmarks.unshift(new Date() - initialTime.getTime());
        putFlag();
    };
    const putFlag = () => {
        $flagContainer.innerHTML = "";
        for (const [indice, benchmark] of benchmarks.entries()) {
            const $li = document.createElement("p");
            $li.innerHTML = `<strong class="is-size-4">${benchmarks.length - indice}.</strong> ${milsecToMinutes(benchmark)}`;
            $flagContainer.append($li);
        }
    };

    const resetTime = () => {
        if (!confirm("Do you want to reset the time?")) {
            return;
        }
        clearInterval(idInterval);
        init();
        benchmarks = [];
        putFlag();
        timeDiference = 0;
    }

    const init = () => {
        $timeElapsed.textContent = "00:00.0";
        hideItem($btnPause);
        hideItem($btnFlag);
        hideItem($btnReset);
    };
    init();

    $btnStart.onclick = initiate;
    $btnFlag.onclick = flagTime;
    $btnPause.onclick = pauseTime;
    $btnReset.onclick = resetTime;
});



// Type of exercise Selector.

const typeSport = ['Functional', 'Cycling', 'GYM', 'Running']
const selectSport = document.querySelector("#selectSport")

const listSport = () => {
    if (typeSport.length > 0)
        typeSport.sort();
    typeSport.forEach(sport => {
        selectSport.innerHTML += `<option id="selectInput">${sport}</option>`
    })
}

listSport();



// Add newExercise Button

const newExerciseForm = document.querySelector("#newExerciseForm")
const form = document.querySelector("#form-order")

newExerciseForm.addEventListener("click", newExercise)

let exerciseID = 1;

function newExercise() {

    let newForm = document.createElement("div");
    newForm.id = `form${exerciseID}`;
    newForm.innerHTML +=
        `<div id="form" class="justify-content-center align-items-baseline row mt-5">
        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Exercise</label>
            <input type="text" name="name" class="form-control" id="exerciseInput" placeholder="">
        </div>

        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Rounds & Reps</label>
            <input id= "roundInput" type="text" name="name" class="form-control" placeholder="">
        </div>

        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Weight</label>
            <input id="weightInput" type="text" name="name" class="form-control" 
                placeholder="">
        </div>

        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Time / Round / Reps</label>
            <input id="timeRoundInput" type="text" name="name" class="form-control" 
                placeholder="">
        </div>

    </div>
    <div class="d-flex justify-content-center">
        <div class="form-floating col-5">
            <textarea id="commentInput" class="form-control" placeholder="Leave a comment here"
                style="height: 60px"></textarea>
            <label for="floatingTextarea">Comments</label>
        </div>
        <div class="d-flex justify-content-end mt-5">
        <button" type="button" class="btn delete-exercise-button">-</button>
    </div>`;
    form.append(newForm);
    exerciseID++;
    newExerciseDelete();
};


// Delete newExercise Button

const newExerciseDelete = () => {

    let btnDelete = document.querySelectorAll(".delete-exercise-button")

    btnDelete.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            console.log(
                e.target.parentElement.parentElement.parentElement.remove()
            );
        });
    });
}



// Save button 

let btnSave = document.querySelector("#saveButton")

btnSave.addEventListener("click", saveForm)

const inputDate = document.querySelector("#dateInput")
const inputSelect = document.querySelector("#selectInput")
const inputExercise = document.querySelector("#exerciseInput")
const inputRound = document.querySelector("#roundInput")
const inputWeight = document.querySelector("#weightInput")
const inputTimeRound = document.querySelector("#timeRoundInput")
const inputComment = document.querySelector("#commentInput")

const dataValidation = () => {
    if (inputDate.value != "" && inputSelect.value != "Type of exercise" && inputExercise.value != "" && inputRound.value != "" && inputWeight.value != "" && inputTimeRound.value != "" && inputComment.value != "") {
        return true
    } else {
        return false
    }
}


class DayExercise {
    constructor(day, user, type, exercise, roundRep, weight, time, comment) {
        this.day = day;
        this.user = user;
        this.type = type;
        this.exercise = exercise;
        this.roundRep = roundRep;
        this.weight = weight;
        this.time = time;
        this.comment = comment;
    }
}

function saveForm() {

    if (dataValidation()) {
        let day = inputDate.value;
        let weight = inputWeight.value;
        let user = sessionStorage.getItem("userNameOk");
        let type = inputSelect.value;
        let exercise = inputExercise.value;
        let roundRep = inputRound.value;
        let time = inputTimeRound.value;
        let comment = inputComment.value;


        rutine.push(new DayExercise(day, user, type, exercise, roundRep, weight, time, comment))
        localStorage.setItem("rutineArray", JSON.stringify(rutine))
        form.reset()
    }

    else {

        let errorMessage = document.createElement("div");
        errorMessage.innerHTML = `<h6 class= "modal-dialog alert alert-danger fixed-bottom text-center"> 🔐 Save error: incomplete fields 🔐</h6>`;
        document.body.append(errorMessage);
        setTimeout(() => {
            errorMessage.remove();
        }, 2300);
    }
}

let rutine = []
rutine = JSON.parse(localStorage.getItem("rutineArray")) || []



