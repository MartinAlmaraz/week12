let row = null; /// global variable to update the row in the table

function submit() {
    let dataEntered = getInfo();// variable to store what getInfo gets into an array
    let readData = readingDataFromLocalStorage(dataEntered);
    if (dataEntered == false) {
        alert('Fill out all fields')
    } else {
        if (row == null) {
            insert(readData);
        } else {
            update();
        }
    } 
    document.getElementById("form").request(); /// clears the entire form
}
// Reads the information of the table
function getInfo() {
    let make = document.getElementById("make").value;
    let model = document.getElementById("model").value;
    let year = document.getElementById("year").value;

    let car = {"make":document.getElementById()
               "model":document.getElementById()

    }

    let arr = [make, model, year];
    if(arr.includes("")) {
        return false;
    } else {
        return arr;
    }
}

function readingDataFromLocalStorage(dataEntered) {

    let n = localStorage.setItem("Make", dataEntered(0)); // grabbing the indexes from the array
    let j = localStorage.setItem("Model", dataEntered(1));
    let e = localStorage.setItem("Year", dataEntered(2));
    
    let n1 = localStorage.getItem("Make", n);
    let j1 = localStorage.getItem("Model", j);
    let e1 = localStorage.getItem("Year", e);

    let arr = [n1, j1, e1];
    return arr;
}
/// Inserts the data into the table
function insert(readData) {
    let row = table.inertRow();
    row.insertCell(0).innerHTML = readData[0]
    row.insertCell(1).innerHTML = readData[0]
    row.insertCell(2).innerHTML = readData[2]
    row.insertCell(3).innerHTML = `<button onClick= edit(this)>edit</button>
    <button onClick= remove(this)>delete</button>`
}
// Edits the car list
function edit(td) { // td as a parameter
    row = td.parentElement.parentElement;
    document.getElementById("make").value = row.cells[0].innerHTML;
    document.getElementById("model").value = row.cells[1].innerHTML;
    document.getElementById("year").value = row.cells[2].innerHTML;
}

//Updates the table
function update() {
    row.cells[0].innerHTML = document.getElementById("make").value;
    row.cells[1].innerHTML = document.getElementById("model").value;
    row.cells[2].innerHTML = document.getElementById("year").value;
    row = null; 
}

function remove(td) {
    let question = confirm("You are about to delete the info are you sure you want to do that?");
    if (question == true) {
        let row = td.parentElement.parentElement; 
        document.getElementById("table").deleteRow(row.rowIndex);

    }

}