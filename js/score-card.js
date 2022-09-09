
// Log In retry

(sessionStorage.getItem("userNameOk") === null) && (location.href = "index.html");


// Shut down Button

const shutDown = document.querySelector("#out");
shutDown.addEventListener("click", logOutMessage);

// Log-Out message

function logOutMessage() {
    Swal.fire({
        icon: 'warning',
        title: "",
        text: "Are you sure you want to Log Out?",
        showConfirmButton: true,
        showCancelButton: true,
    })
        .then((result) => {
            if (result.isConfirmed) {
                (location.href = "index.html")
            }
            else if (result.isDenied) { return false }
        });
};



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


    // Reset chronometer message

    const resetTime = () => {
        Swal.fire({
            icon: 'warning',
            title: "Do you want to reset the time?",
            showConfirmButton: true,
            showCancelButton: true,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    clearInterval(idInterval);
                    init();
                    benchmarks = [];
                    putFlag();
                    timeDiference = 0;
                }
                else if (result.isDenied) { return false }
            });
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



// Exercise type Selector

const typeSport = ['Functional', 'Cycling', 'GYM', 'Running'];
const selectSport = document.querySelector("#selectSport");

const listSport = () => {
    if (typeSport.length > 0)
        typeSport.sort();
    typeSport.forEach(sport => {
        selectSport.innerHTML += `<option>${sport}</option>`
    })
};

listSport();



// Add newExercise Button

const newExerciseForm = document.querySelector("#newExerciseForm");
const form = document.querySelector("#form-order");

newExerciseForm.addEventListener("click", newExercise);

let exerciseID = 1;

function newExercise() {

    let newForm = document.createElement("div");
    newForm.id = `form${exerciseID}`;
    newForm.innerHTML +=
        `<div id="form" class="justify-content-center align-items-baseline row mt-5 formClass">
        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Exercise</label>
            <input type="text" name="name" class="form-control inputClass" id="exerciseInput" placeholder="">
        </div>

        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Rounds & Reps</label>
            <input id= "roundInput" type="text" name="name" class="form-control inputClass" placeholder="">
        </div>

        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Weight</label>
            <input id="weightInput" type="text" name="name" class="form-control inputClass" 
                placeholder="">
        </div>

        <div class="mb-2 text-center col-2">
            <label for="name" class="form-label">Time / Round / Reps</label>
            <input id="timeRoundInput" type="text" name="name" class="form-control inputClass" 
                placeholder="">
        </div>
        <div class="d-flex justify-content-center">
        <div class="form-floating col-5">
            <textarea id="commentInput" class="form-control inputClass" placeholder="Leave a comment here"
                style="height: 60px maxlength="90""></textarea>
            <label for="floatingTextarea">Comments</label>
        </div>
        <div class="d-flex justify-content-end mt-5">
        <button" type="button" class="btn delete-exercise-button">-</button>
    </div>
    </div>
`;
    form.append(newForm);
    exerciseID++;
    newExerciseDelete();
};


// Delete newExercise Button

const newExerciseDelete = () => {

    let btnDelete = document.querySelectorAll(".delete-exercise-button")

    btnDelete.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.target.parentElement.parentElement.parentElement.remove();
        });
    });
};



// Save Button 

let btnSave = document.querySelector("#saveButton");

btnSave.addEventListener("click", saveAll);

const inputDate = document.querySelector("#dateInput");
const inputSelect = document.querySelector("#selectSport");


const validateData = (exerciseValue, roundValue, weightValue, timeRoundValue, commentValue) =>
    (exerciseValue != "" && roundValue != "" && weightValue != "" && timeRoundValue != "" && commentValue != "") ? true : false;

const isValidCommonData = () => (inputDate.value != "" && inputSelect.value != "Exercise type") ? true : false;


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
};

function saveAll() {

    if (!isValidCommonData()) {
        errorMessage("SAVE ERROR", "Incomplete Date or Type Exercise.");
    } else {
        const allForms = document.getElementsByClassName('formClass');

        let allFormsValid = true;

        for (i = 0; i < allForms.length; i++) {
            inputs = allForms[i].getElementsByClassName('inputClass');

            let exerciseValue = inputs.exerciseInput.value;
            let roundValue = inputs.roundInput.value;
            let weightValue = inputs.weightInput.value;
            let timeRoundValue = inputs.timeRoundInput.value;
            let commentValue = inputs.commentInput.value;

            if (validateData(exerciseValue, roundValue, weightValue, timeRoundValue, commentValue)) {
                let day = inputDate.value;
                let weight = weightValue
                let user = sessionStorage.getItem("userNameOk");
                let type = inputSelect.value;
                let exercise = exerciseValue;
                let roundRep = roundValue;
                let time = timeRoundValue;
                let comment = commentValue;

                rutine.push(new DayExercise(day, user, type, exercise, roundRep, weight, time, comment))

            } else {
                allFormsValid = false;
                allForms[i].classList.add('formError')
                j = i;
                setTimeout(() => {
                    const removeClass = document.querySelector (".formError");
                    removeClass.classList.remove('formError')
                }, 3000);
                errorMessage("SAVE ERROR", "Incomplete fields in forms");
            }
        }

        if (allFormsValid) {
            localStorage.setItem("rutineArray", JSON.stringify(rutine))
            succedMessage("Upload Successful")
        }
    
    }
};


let rutine = []
rutine = JSON.parse(localStorage.getItem("rutineArray")) || [];


// Clear button 

let clearButton = document.querySelector("#clearButton")

const clearAll = ()=> {form.reset()};

clearButton.addEventListener("click", clearAll);


