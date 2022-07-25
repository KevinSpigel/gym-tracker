

let email = ""
let password = ""
let login = false

// debugger

while (login === false) {
    email = prompt("Enter your Email:")
    password = prompt("Enter your password:")
    if (email === "kevinspigel@gmail.com" && password === "1234") {
        console.log("Welcome", email)
        login = true
    } else {
        alert("⛔️ Incorrect Email or Password.")
    }
}