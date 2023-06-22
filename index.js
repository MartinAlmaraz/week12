const URL_ENDPOINT = 'http://localhost:3000/cars'

$.get(URL_ENDPOINT).then(data => {
    data.map(car => {
        $('tbody').append(
            $(`
             <tr>
               <td>${car.make}</td>
               <td>${car.model}</td>
               <td>${car.year}</td>
        
             </tr>
            `)
        )

    })
})

$('#submitCar').click(function (e) {
    e.preventDefault()
    $.post(URL_ENDPOINT, {
        make: $('#make').val(),
        model: $('#model').val(),
})
})

function deleteUser(id) {
    $.ajax(`${URL_ENDPOINT}/${id}`, {
        type: 'DELETE',
    })
}

function updateUser(){
    let id = $('#updateCar').val()
    $.ajax(`${URL_ENDPOINT}/${id}`, {
      method: 'PUT',
      data: {
        make: $('#updateMake').val(), 
        model: $('#model').val(),
      }
    })
}
$('#updateCar').click(updateUser)


