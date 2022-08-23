
let myRutine = JSON.parse(localStorage.getItem("rutineArray"))

myRutine.forEach(element => {
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
