// Log-In score card web app


let nameInput = document.querySelector("#nameLogIn");

let passInput = document.querySelector("#pass");


const accessGranted = document.querySelector("button");
accessGranted.addEventListener("click", userValidation);


let userDataBase = []

const uploadUserDataBase = () =>{
fetch ('https://63139021a8d3f673ffcd421e.mockapi.io/userDataBase')
.then((response) => response.json())
.then((data) =>{
    userDataBase = data;
} )
.catch ((error) => errorMessage("Sorry, an error occurred.", "Please, try it again in a few minutes"))
}

uploadUserDataBase();




function userValidation(e) {
    e.preventDefault();

    let user = nameInput.value;
    let pwd = passInput.value;

    let userProfile = userDataBase.find((element) => {
        return element.user === user && element.pwd === pwd;
    });

    if (userProfile) {
        sessionStorage.setItem("userNameOk", user)
        location.href = "score-card.html";
    }

    else if (userProfile === undefined) {errorMessage ("ACCESS DENIED", "Incorrect Username or Password.")}
}
