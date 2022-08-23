
let nameInput = document.querySelector("#nameLogIn");

let passInput = document.querySelector("#pass");


const accessGranted = document.querySelector("button");
accessGranted.addEventListener("click", userValidation);


const userDataBase = [
    { user: 'Kev', pwd: '12345' },
    { user: 'Gonza', pwd: '22222' },
    { user: 'Fer', pwd: '0000' }
];



function userValidation(e) {
    e.preventDefault();
    ;

    let user = nameInput.value;
    let pwd = passInput.value;


    let userProfile = userDataBase.find((element) => {
        return element.user === user && element.pwd === pwd;
    });

    if (userProfile) {
        sessionStorage.setItem("userNameOk", user)
        location.href = "score-card.html";
    }

    else if (userProfile === undefined) {

        let messageDiv = document.createElement("div");
        messageDiv.innerHTML = `<h2 class= "modal-dialog alert alert-danger fixed-bottom">⛔️ ACCESS DENIED: Incorrect Username or Password.</h2>`;
        document.body.append(messageDiv);
        setTimeout(() => {
            messageDiv.remove();
        }, 2300);
    }
}
