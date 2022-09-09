// Sign-In score card web app


let newUserInput = document.querySelector("#newUser");

let newPassInput = document.querySelector("#newPass");


const submitUserInfo = document.querySelector("button");
submitUserInfo.addEventListener("click", newUserValidation);


let userDataBase = [];

const uploadUserDataBase = () => {
    fetch('https://63139021a8d3f673ffcd421e.mockapi.io/userDataBase')
        .then((response) => response.json())
        .then((data) => {
            userDataBase = data;
        })
        .catch((error) => errorMessage("Sorry, an error occurred.", "Please, try it again in a few minutes"))
};

uploadUserDataBase();



async function doPost() {
    const dates = {
        user: newUserInput.value,
        pwd: newPassInput.value,
    }

    await fetch('https://63139021a8d3f673ffcd421e.mockapi.io/userDataBase', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(dates),
    });
}



const validateFieldsData = () => (newUserInput.value != "" && newPassInput.value != "") ? true : false;

function newUserValidation(e) {
    e.preventDefault();

    if (!validateFieldsData()) {
        errorMessage("ERROR", "Incomplete fields");
        return;
    }

    let user = newUserInput.value;
    let pwd = newPassInput.value;

    let userDataProfile = userDataBase.find((element) => {
        return element.user === user;
    });

    if (userDataProfile) {
        errorMessage("This Username already exists", "Please, choose another Username.");
        return;
    }

    doPost(user, pwd);

    succedMessage("Upload Successful");

    setTimeout(() => {
        location.href = "index.html"
    }, 4000);

};







