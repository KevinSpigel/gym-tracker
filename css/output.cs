@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}

body {
  background-color: rgb(243, 243, 243);
  width: 100%;
  height: 100vh;
}

.p-footer {
  font-size: small;
}

a {
  text-decoration: none;
  color: currentColor;
}
a:hover {
  color: currentColor;
}

.login-body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type=email] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type=password] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.card-box {
  box-shadow: 1px 1px 4px 4px rgb(241, 240, 240);
  border-color: 5px solid rgb(0, 0, 0);
  border-radius: 10px;
}

.p-chrono {
  color: green;
  font-size: 4rem;
}

.button, .add-exercise-button, .delete-exercise-button, .chrono-button-start, .chrono-button-reset, .chrono-button-flag, .chrono-button-pause, .clear-button, .save-button {
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  font-weight: bold;
  width: 150px;
  margin-bottom: 5px;
  border-radius: 5px;
}

.save-button {
  background-color: darkgreen;
}

.clear-button {
  background-color: darkred;
}

.chrono-button-start, .chrono-button-reset, .chrono-button-flag, .chrono-button-pause {
  background-color: rgba(54, 144, 246, 0.79);
  margin-top: 15px;
}

.chrono-button-pause {
  background-color: rgb(232, 232, 8);
}

.chrono-button-flag {
  background-color: rgba(16, 169, 5, 0.79);
}

.chrono-button-reset {
  background-color: rgba(246, 54, 54, 0.79);
}

.add-exercise-button, .delete-exercise-button {
  background-color: rgba(16, 169, 5, 0.63);
  width: 30px;
  height: 30px;
  padding: 0;
  margin-left: 15px;
}

.delete-exercise-button {
  background-color: rgba(174, 19, 19, 0.63);
  padding-top: 4px;
}

.formError {
  border: solid 5px rgba(246, 54, 54, 0.1);
  margin-right: 2%;
  margin-left: 2%;
}

/*# sourceMappingURL=output.cs.map */
