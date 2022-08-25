
// Log In retry

(sessionStorage.getItem("userNameOk") === null) && (location.href= "index.html");


// Shut down button

const shutDown = document.querySelector("#out")
shutDown.addEventListener("click", logOut)

function logOut() {
    let goOut = confirm("Are you sure you want to Log Out?")
    (goOut) && (location.href = "index.html")}


// Tracking training table

let myRutine = JSON.parse(localStorage.getItem("rutineArray"))

let userRutine = myRutine.filter (element => element.user === sessionStorage.getItem("userNameOk"))

userRutine.forEach(element => {
historyTable.innerHTML += 
`<tr>
<th scope="row">${element.day}</th>
<td>${element.type}</td>
<td>${element.exercise}</td>
<td>${element.roundRep}</td>
<td>${element.weight}</td>
<td>${element.time}</td>
<td>${element.comment}</td>
</tr>`
});

