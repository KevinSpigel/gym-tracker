
const userDataBase = [{ user: 'Kev', pwd: '12345' }, { user: 'Gonza', pwd: '22222' }, { user: 'Fer', pwd: '0000' }]

let attemps = 0

function logIn(user, pwd) {

    // debugger

    if (attemps >= 3) {
        return alert(" Access Denied - User Blocked: You exceeded the maximum attempts. Contact the administrator.")
    }

    user = prompt("Enter your Username:")
    pwd = prompt("Enter your Password:")


    let userProfile = userDataBase.find((element) => {
        return element.user === user && element.pwd === pwd;
    });

    if (userProfile) {
        console.log("Welcome", user)
    }

    else if (userProfile === undefined) {
        alert("⛔️ Incorrect Username or Password.");
        attemps++;
        logIn();
    }
}
