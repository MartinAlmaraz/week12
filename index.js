const URL_ENDPOINT = 'http://localhost:3000/cars' // adding the api to the file

/// Appending the objects into the table element in the HTML using .map 
$.get(URL_ENDPOINT).then(data => {
    data.map(car => {
        $('tbody').append(
            $(`
             <tr>
               <td>${car.id}</td>
               <td>${car.make}</td>
               <td>${car.model}</td>
               <td>${car.year}</td>
               <td>
                 <button onclick="deleteUser(${car.id})">Delete</button>
               </td>
        
             </tr>
            `)
        )

    })
})
/// Submits make model and year into the db.json using post
$('#submitCar').on("click", function() {
    
    $.post(URL_ENDPOINT, {
        make: $('#make').val(),
        model: $('#model').val(),
        year: $('#year').val(),
})
})

/// Delete using ajax targeting the URL and the id of the object
function deleteUser(id) {
    $.ajax(`${URL_ENDPOINT}/${id}`, {
        type: 'DELETE',
    })
}

///Updates the cars make model or year
function updateUser(){
    let id = $('#updateId').val()
    $.ajax(`${URL_ENDPOINT}/${id}`, {
      method: 'PUT',
      data: {
        make: $('#updateMake').val(), 
        model: $('#updateModel').val(),
        year: $('#updateYear').val(),
      }
    })
}
$('#updateCar').on("click", updateUser)


