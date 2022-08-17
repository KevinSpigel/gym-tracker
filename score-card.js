
// Shut down button

const shutDown = document.querySelector("li")
shutDown.addEventListener("click", logOut)

function logOut() {
    let goOut = confirm("Are you sure you want to Log Out?")
    if (goOut) {
        location.href = "index.html"
    }
}


//Chronometer

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



// Selector of "type of exercise" in the score-card.html.

const typeSport = ['Functional', 'Cycling', 'GYM', 'Running']
const selectSport = document.querySelector("#selectSport")

function listSport() {
    typeSport.sort();
    typeSport.forEach(sport => {
        selectSport.innerHTML += `<option>${sport}</option>`
    })
}

listSport();



// Button to add newExercise 
const newExerciseForm = document.querySelector("#newExerciseForm")
const form = document.querySelector("#form-order")

newExerciseForm.addEventListener("click", newExercise)

let exerciseID = 1;

function newExercise() {

    let newForm = document.createElement("div");
    newForm.id = `form${exerciseID}`;
    newForm.innerHTML +=
        `<div class="justify-content-center align-items-baseline row mt-5">
        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Exercise</label>
            <input type="text" name="name" class="form-control" id="name" placeholder="">
        </div>

        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Rounds & Reps</label>
            <input type="text" name="name" class="form-control" id="name" placeholder="">
        </div>

        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Weight</label>
            <input id="weightInput" type="text" name="name" class="form-control" id="name"
                placeholder="">
        </div>

        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Time / Round / Reps</label>
            <input id="timeRoundInput" type="text" name="name" class="form-control" id="name"
                placeholder="">
        </div>

    </div>
    <div class="d-flex justify-content-center">
        <div class="form-floating col-5">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
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


// Button to delete newExercise 

function newExerciseDelete() {

    let btnDelete= document.querySelectorAll (".delete-exercise-button")

    btnDelete.forEach((btn) => {
        btn.addEventListener("click", (evt) => {
            console.log(
                evt.target.parentElement.parentElement.parentElement.remove()
            );
        });
    });
}



// //Save button 


// let dateInput = document.querySelector("#dateInput");
// let usernamInput = document.querySelector("#usernamInput");
// let typeExerciseInput = document.querySelector("#typeExerciseInput");
// //en el selector del tipo de ejercicio como hago par aponerl el ID?

// let exerciseInput = document.querySelector("#exerciseInput");
// let roundsInput = document.querySelector("#roundsInput");
// let weightInput = document.querySelector("#weightInput");
// let timeRoundInput = document.querySelector("#timeRoundInput");
// let commentInput = document.querySelector("#commentInput");
// //en el comment cómo hago par aponerl el ID?

// const saveButton = document.querySelector("#saveButton")

// saveButton.addEventListener("click", saveButton)

// function saveButton(e) {
//     e.preventDefault();

//     let dateEntry = dateInput.value;
//     let usernameEntry = usernamInput.value;
//     let typeExerciseEntry = typeExerciseInput.value;
//     let exerciseEntry = exerciseInput.value;
//     let roundsEntry = roundsInput.value;
//     let weightEntry = weightInput.value;
//     let timeRoundEntry = timeRoundInput.value;
//     let commentEntry = commentInput.value;

//     rutine.push(saveButton(dateEntry, usernameEntry, typeExerciseEntry, exerciseEntry, roundsEntry, weightEntry, timeRoundEntry, commentEntry))

//     console.table(rutine)
// }

// const rutine = []



// // Clear button 

// const clearButton = document.querySelector("#clearButton")

// clearButton.addEventListener("click", clearButton)

// function clearButton(e) {
//     e.preventDefault();
//     saveButton().remove()
// }


