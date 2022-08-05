
const userDataBase = [{ user: 'Kev', pwd: '12345' }, { user: 'Gonza', pwd: '22222' }, { user: 'Fer', pwd: '0000' }]

const maxAttemps = []


function logIn(user, pwd) {

    debugger

    user = prompt("Enter your Username:")
    pwd = prompt("Enter your Password:")

    checkBlockedUser();

    userDataBase.forEach ((element, i) => {
        if (element.user === user && element.pwd === pwd) {
            console.log("Welcome", user)
        }

        else {
            alert("⛔️ Incorrect Username or Password.")
            maxAttemps.push(user)
        }
    })


    function checkBlockedUser() {
        const blockedUsers = maxAttemps.reduce((accumulator) => accumulator + 0,0)
        if (blockedUsers >= 3){
            alert("Blocked User")
        }
    }

}

logIn();
